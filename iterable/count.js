// This module is browser compatible.

/** @typedef {Generator<number, void, unknown>} NumberGenerator */

/**
 * @param {number} start 
 * @param {number} step
 * @returns {NumberGenerator} 
 */
export function* count(start = 0, step = 1) {
  if (step === 0) {
    throw new Error("argument `step` must be different than zero");
  }
  while (true) {
    yield start;
    start += step;
  }
}
