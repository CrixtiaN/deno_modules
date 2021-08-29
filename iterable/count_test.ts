import { asserts } from "./dev_deps.js";
import { count } from "./count.js";

Deno.test({
  name: "count - with no arguments",
  fn() {
    const numbers = count();
    const expectedNumbers = [0, 1, 2, 3, 4];
    for (const expected of expectedNumbers) {
      const { value: actual } = numbers.next();
      asserts.assertEquals(actual, expected);
    }
  },
});

Deno.test({
  name: "count - only with first argument",
  fn() {
    const numbers = count(5);
    const expectedNumbers = [5, 6, 7, 8, 9];
    for (const expected of expectedNumbers) {
      const { value: actual } = numbers.next();
      asserts.assertEquals(actual, expected);
    }
  },
});

Deno.test({
  name: "count - with positive step",
  fn() {
    const numbers = count(0, 2);
    const expectedNumbers = [0, 2, 4, 6, 8];
    for (const expected of expectedNumbers) {
      const { value: actual } = numbers.next();
      asserts.assertEquals(actual, expected);
    }
  },
});

Deno.test({
  name: "count - with negative step",
  fn() {
    const numbers = count(0, -2);
    const expectedNumbers = [0, -2, -4, -6, -8];
    for (const expected of expectedNumbers) {
      const { value: actual } = numbers.next();
      asserts.assertEquals(actual, expected);
    }
  },
});
