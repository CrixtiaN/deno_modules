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
export function* drop(iterable, amount) {
  if (amount < 0) {
    throw new Error("argument `amount` can't be a negative number");
  }
  let i = 0;
  for (const item of iterable) {
    if (i >= amount) {
      yield item;
    }
    i += 1;
  }
}

/**
 * @template T
 * @param {IterableObject<T>} iterable
 * @param {(value: T) => boolean} fn
 * @returns {Generator<T, void, unknown>}
 */
 export function* dropWhile(
  iterable,
  fn,
) {
  let failed = false;
  for (const item of iterable) {
    if (!failed && fn(item)) {
      continue;
    }
    failed = true;
    yield item;
  }
}
