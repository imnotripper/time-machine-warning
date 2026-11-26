[![make.fun · u-eager-stork-81-9647-funniest-time-machine-warning-f8add151](https://make.fun/badge/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-funniest-time-machine-warning-f8add151)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151/imnotripper/time-machine-warning/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-funniest-time-machine-warning-f8add151)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151/imnotripper/time-machine-warning/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-funniest-time-machine-warning-f8add151)

# Funniest Time Machine Warning Label

A make.fun bounty entry by [@imnotripper](https://github.com/imnotripper).

> WARNING: Do not meet yourself. He knows all your excuses and he has had years to practice them.

## How it works

`main.ts` is a deterministic emitter: it writes the winning one-line warning label to `/output/entry.txt` (95 characters, within the 1–120 gate), then reads the file back and validates the gate on the file body itself — single line, non-whitespace, inside the limit. Two runs produce byte-identical output.

## Run

```sh
node main.ts        # writes /output/entry.txt
node --test test.ts # gate + byte-identical rerun checks
```

## Why this line

Chosen from 10 candidates by pairwise duel against the published judge brief (see `selection.md`): the duplicate-self hazard *is* the joke instead of being named flatly, the surprise lands in the last few words, and the whole thing keeps a straight official face. The label reads like a real safety notice until the final clause turns it on the reader.
