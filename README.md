# Stack exam content packs

Ready-made A-level exam packs for [Stack](https://github.com/babyquackbro-stack/stack-releases): each pack is one board's
specification with its papers (dates, start times and lengths from the board's published timetable) and revision topics.
The Stack app downloads `content/index.json`, then only the packs you pick.

- Format: [content/SCHEMA.md](content/SCHEMA.md)
- Timetable: `content/timetables/2027.json`, parsed from the AQA, Pearson and OCR June 2027 timetables
- Packs are built from `content/src/*.js` with the build script in the Stack app source; don't edit `packs/*.json` by hand.

Packs marked with `unsure` notes haven't been fully checked against the specification. Always check exam dates with your school.
