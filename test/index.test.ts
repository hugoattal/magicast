import { expect, it, describe } from "vitest";
import { parseCode, generateCode } from "../src";

describe("packageName", () => {
  it("parse, update, generate", () => {
    const _module = parseCode(`
    export const a = {}
    export default {
      // This is foo
      foo: ["a"]
    }`);

    _module.exports.default.props.foo.push("b");

    const { code } = generateCode(_module);

    expect(code).toMatchInlineSnapshot(`
      "
          export const a = {}
          export default {
            // This is foo
            foo: [\\"a\\", \\"b\\"]
          }"
    `);
  });
});