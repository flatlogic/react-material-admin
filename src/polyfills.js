import process from 'process';
import { Buffer } from 'buffer';

if (!globalThis.process) {
  globalThis.process = process;
}

if (!globalThis.Buffer) {
  globalThis.Buffer = Buffer;
}
