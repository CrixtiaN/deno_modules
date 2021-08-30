// This module is browser compatible.

/**
 * @template T
 * @typedef {Iterable<T> | IterableIterator<T>} IterableObject
 */

/**
 * @template T
 * @param {IterableObject<T>} iterable
 * @param {number} amount
 * @returns {Generator<T, void, unknown>}
 */
export function* take(iterable, amount = Infinity) {
  if (amount < 0) {
    throw new Error("argument `amount` can't be a negative number");
  }
  if (amount === 0) {
    return;
  }
  let i = 0;
  for (const item of iterable) {
    yield item;
    i += 1;
    if (i === amount) {
      break;
    }
  }
}

/**
 * @template T
 * @param {IterableObject<T>} iterable
 * @param {(value: T) => boolean} fn
 * @returns {Generator<T, void, unknown>}
 */
export function* takeWhile(iterable, fn) {
  for (const item of iterable) {
    if (fn(item) === false) {
      break;
    }
    yield item;
  }
}
