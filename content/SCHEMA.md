# Stack content packs: format

A pack = one A-level specification from one board. Stack downloads `index.json`
(small), shows the picker, then fetches only the packs the user ticks.

Don't edit `index.json` or `packs/*.json` by hand. Edit `src/<board>.js`, then run
`node scripts/build-content-packs.js`, then `node scripts/test-content-packs.js`.

## Source (`src/<board>.js`)

```js
{
  id: 'aqa-psychology-7182', board: 'AQA', subject: 'Psychology', code: '7182', firstExam: 2017,
  url: '<spec page>', hours: 60,           // hours = suggested total revision (default 60)
  options: [{ id: 'opt1', name: 'Paper 3 option 1', pick: 1, choices: [['rel', 'Relationships'], ...] }],
  papers: [['7182/1', 'Paper 1: Introductory topics in psychology'], ...],   // [component code, name, { opt }]
  topics: [
    ['Social influence', '1', 'Conformity; Obedience; ...'],                // [name, papers it's examined on, subtopics, { opt, w }]
    ['Relationships', '3', '...', { opt: 'opt1:rel' }],
  ],
  unsure: ['anything not checked against the spec'],
}
```

- Paper refs: `'1'` matches `7182/1`, `'01'` matches `9MA0/01`; full codes (`Y540`) work too.
- Each paper's **date, start and length come from `timetables/<year>.json`**, never typed by hand.
  The build fails if a component code isn't in the timetable.
- A "Past paper practice" topic is added to every paper automatically.
- `w` = weight for sharing out the hours (default: number of subtopics, at least 2).

## Built pack (`packs/<id>.json`)

```json
{ "format": 1, "id": "...", "board": "AQA", "subject": "Psychology", "level": "A-level", "code": "7182",
  "title": "Psychology", "firstExam": 2017, "specVersion": null, "source": "...", "v": 1, "series": "June 2027",
  "hours": 60,
  "options": [{ "id": "opt1", "name": "...", "pick": 1, "choices": [{ "id": "rel", "name": "Relationships" }] }],
  "papers":  [{ "id": "7182/1", "name": "...", "minutes": 120, "date": "2027-05-18", "start": "09:00", "opt": "g:c?" }],
  "topics":  [{ "id": "t1", "name": "...", "papers": ["7182/1"], "sub": ["..."], "mins": 285, "opt": "g:c?", "practice": true }],
  "unsure":  ["..."] }
```

### Past papers and grade boundaries

`boundaries/<id>.json` holds each series' per-paper raw boundaries, copied from the board's
notional component boundary document (link in `source`). The build turns them into
`pastPapers` on the pack, newest first:

```json
"pastPapers": [
  { "id": "2024-06", "name": "June 2024", "source": "https://…", "papers": { "7136/1": { "max": 80, "A*": 59, "A": 52, "B": 44, "C": 36, "D": 28, "E": 20 } } },
  { "id": "2018-06", "name": "June 2018", "est": true, "note": "Estimated: the average of the 2021–2026 boundaries", "papers": { … } },
  { "id": "specimen", "name": "Specimen papers", "est": true, … }
]
```

The series listed are the ones the spec was sat in (June from its first exam, autumn 2020 and 2021,
June from 2022) plus Specimen. Any without published boundaries get the average, marked `est`.
Each paper also gets `marks` (its total). Game mode's practice paper uses this: pick series + paper,
type your mark, get the grade (`StackPacks.pastPaper(pack, seriesId, paperId)`).

Bump `v` in the source when you fix a pack: apps re-download a pack only when its `v` changes.

## How it maps onto Stack (`src/renderer/content-packs.js`)

| Pack | Stack |
|---|---|
| subject | `settings.subjects` entry, matched by name ("Mathematics" finds "Maths"), created if missing |
| paper | exam: `Store.addExam({ text: "<Subject> <paper name>", date, start, end, subject, packId, packPaper, packV })` |
| topic | revision item on the **earliest** of its papers you sit (by date), `Store.addExamTopic(examId, name, mins, startAt)` |
| sub | kept on the item as `packSub` (not separate tasks) |
| start revising | 8 weeks before the paper, or today if that's passed |

Adding the same pack twice skips papers that are already there.
