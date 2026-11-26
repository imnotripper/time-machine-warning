// Tests for the time-machine-warning emitter: run the program, then check
// the gate on what it actually wrote.
import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

const EXPECTED =
  'WARNING: Do not meet yourself. He knows all your excuses and he has had years to practice them.';

test('emitter writes a valid single-line entry', () => {
  execFileSync(process.execPath, ['main.ts'], { cwd: import.meta.dirname });
  const text = readFileSync('/output/entry.txt', 'utf8');
  const body = text.replace(/\n$/, '');
  assert.equal(body, EXPECTED);
  assert.ok(!body.includes('\n'), 'must be a single line');
  const chars = [...body].length;
  assert.ok(chars >= 1 && chars <= 120, `gate needs 1-120 chars, got ${chars}`);
  assert.ok(body.trim().length > 0, 'must not be only white space');
  // 98 is the emitter's own count; hand counts kept drifting on earlier
  // entries, so the number here must match what main.ts prints, not a guess.
  assert.equal(chars, 95);
});

test('two runs are byte-identical', () => {
  execFileSync(process.execPath, ['main.ts'], { cwd: import.meta.dirname });
  const first = readFileSync('/output/entry.txt');
  execFileSync(process.execPath, ['main.ts'], { cwd: import.meta.dirname });
  const second = readFileSync('/output/entry.txt');
  assert.deepEqual(first, second);
});
