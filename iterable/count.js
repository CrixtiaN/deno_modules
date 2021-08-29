/**
 * @param {number} start 
 * @param {number} step
 * @returns {Generator<number, void, unknown>} 
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
