import { asserts } from "./dev_deps.js";
import { range } from "./range.js";

Deno.test({
  name: "range - with one argument",
  fn() {
    const actual = Array.from(range(5));
    const expected = [0, 1, 2, 3, 4];
    asserts.assertEquals(actual, expected);
  },
});

Deno.test({
  name: "range - with two argument",
  fn() {
    const actual = Array.from(range(1, 11));
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    asserts.assertEquals(actual, expected);
  },
});

Deno.test({
  name: "range - with three argument",
  fn() {
    const actual = Array.from(range(1, 11, 2));
    const expected = [1, 3, 5, 7, 9];
    asserts.assertEquals(actual, expected);
  },
});

Deno.test({
  name: "range - with non valid negative step argument",
  fn() {
    const actual = Array.from(range(1, 11, -2));
    const expected = [] as const;
    asserts.assertEquals(actual, expected);
  },
});

Deno.test({
  name: "range - with valid negative step argument",
  fn() {
    const actual = Array.from(range(1, -11, -2));
    const expected = [1, -1, -3, -5, -7, -9];
    asserts.assertEquals(actual, expected);
  },
});

Deno.test({
  name: "range - with non valid positive step argument",
  fn() {
    const actual = Array.from(range(1, -11, 2));
    const expected = [] as const;
    asserts.assertEquals(actual, expected);
  },
});

Deno.test({
  name: "range - with non valid step argument",
  fn() {
    asserts.assertThrows(() => {
      Array.from(range(1, 11, 0));
    });
  },
});
