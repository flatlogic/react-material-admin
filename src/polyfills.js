import process from 'process';
import { Buffer } from 'buffer';

const runtimeGlobal = typeof window !== 'undefined' ? window : {};

if (!runtimeGlobal.process) {
  runtimeGlobal.process = process;
}

if (!runtimeGlobal.Buffer) {
  runtimeGlobal.Buffer = Buffer;
}
