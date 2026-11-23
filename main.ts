import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const entry = 'I hallucinated the win condition.';

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', entry, 'utf8');
