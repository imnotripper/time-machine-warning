// Funniest Time Machine Warning Label — deterministic emitter.
// Writes the winning label (see selection.md) to /output/entry.txt,
// then reads it back and checks the gate itself: UTF-8 text, 1-120
// characters, a single line, not only white space. Nothing is random,
// nothing is read from the environment: two runs write byte-identical files.
// The winner turns the duplicate-self hazard into the joke (criterion 2)
// instead of naming a paradox flatly, and saves the surprise — "years to
// practice them" — for the last few words (criterion 3).

import { chmodSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';

const LINE =
  'WARNING: Do not meet yourself. He knows all your excuses and he has had years to practice them.';

const LIMIT = 120;
const OUT = '/output/entry.txt';

const chars = [...LINE].length;
if (chars < 1 || chars > LIMIT) throw new Error(`entry is ${chars} characters, gate needs 1-${LIMIT}`);
if (LINE.trim().length === 0) throw new Error('entry is only white space');
if (LINE.includes('\n')) throw new Error('entry must be a single line');

mkdirSync('/output', { recursive: true });
writeFileSync(OUT, LINE + '\n', 'utf8');
chmodSync(OUT, 0o644);

const back = readFileSync(OUT, 'utf8');
if (back !== LINE + '\n') throw new Error('read-back mismatch');
// Validate what the gate will actually read: the file's body, not just
// the string in this file. A trailing newline is fine; anything else that
// pushes the body over the limit or off one line is not.
const body = back.replace(/\n$/, '');
const bodyChars = [...body].length;
if (bodyChars < 1 || bodyChars > LIMIT) throw new Error(`file body is ${bodyChars} characters, gate needs 1-${LIMIT}`);
if (body.includes('\n')) throw new Error('file body must be a single line');
if (body.trim().length === 0) throw new Error('file body is only white space');
console.log(`wrote ${OUT} (${chars} chars)`);
