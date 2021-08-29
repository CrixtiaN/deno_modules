import { asserts } from "./dev_deps.js";
import { drop, dropWhile } from "./drop.js";

Deno.test({
  name: "drop",
  fn() {
    const source = [0, 2, 4, 6, 8, 10];
    const actual = Array.from(drop(source, 3));
    const expected = [6, 8, 10];
    asserts.assertEquals(actual, expected);
  },
});

Deno.test({
  name: "dropWhile",
  fn() {
    const source = [0, 2, 4, 6, 8, 10];
    const actual = Array.from(dropWhile(source, (n) => n !== 8));
    const expected = [8, 10];
    asserts.assertEquals(actual, expected);
  },
});