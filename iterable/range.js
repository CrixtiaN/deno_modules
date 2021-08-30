// This module is browser compatible.

import { take } from "./take.js";
import { count } from "./count.js";

/** @typedef {Generator<number, void, unknown>} NumberGenerator */

/** @typedef {{
 *  (stop: number): NumberGenerator;
 *  (start: number, stop: number, step?: number): NumberGenerator;
 * }} RangeGenerator */

/**
 * @param {number} start
 * @param {number} stop
 * @param {number} step
 * @returns {NumberGenerator}
 */
function* _range(start, stop = start, step = 1) {
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

/** @type {RangeGenerator} */
export const range = _range;
