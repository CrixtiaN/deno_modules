import { asserts } from "./dev_deps.js";
import { take, takeWhile } from "./take.js";

Deno.test({
  name: "take",
  fn() {
    const source = [0, 2, 4, 6, 8, 10];
    const actual = Array.from(take(source, 3));
    const expected = [0, 2, 4];
    asserts.assertEquals(actual, expected);
  },
});

Deno.test({
  name: "takeWhile",
  fn() {
    const source = [0, 2, 4, 6, 8, 10];
    const actual = Array.from(takeWhile(source, (n) => n !== 8));
    const expected = [0, 2, 4, 6];
    asserts.assertEquals(actual, expected);
  },
});
