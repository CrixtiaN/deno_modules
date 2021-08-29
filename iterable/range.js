import { take } from "./take.js";
import { count } from "./count.js";

// export function range(stop: number): Generator<number, void>;
// export function range(
//   start: number,
//   stop: number,
//   step?: number,
// ): Generator<number, void>;
/**
 * @param {number} start 
 * @param {number} stop 
 * @param {number} step 
 * @returns {Generator<number, void, unknown>}
 */
export function* range(start, stop = start, step = 1) {
  if (step === 0) {
    throw new Error("argument `step` must be different than zero");
  }
  if (arguments.length === 1) {
    start = 0;
  }
  if (start < stop && step < 0 || start > stop && step > 0) {
    return;
  }
  const amount = Math.ceil(Math.abs((stop - start) / step));
  yield* take(count(start, step), amount);
}
