import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { getHeroBackgroundStyle, getHeroBackgroundValue } from "../hero-background.js";

const require = createRequire(import.meta.url);
const blocks = [
  require("../HeroHome/block.json"),
  require("../HeroSlide/block.json"),
];

for (const block of blocks) {
  describe(`${block.name} background`, () => {
    const defaults = Object.fromEntries(
      Object.entries(block.attributes).map(([name, attribute]) => [name, attribute.default])
    );

    it("preserves the existing image background by default", () => {
      assert.equal(getHeroBackgroundValue(defaults), "");
      assert.deepEqual(getHeroBackgroundStyle(defaults), {});
      assert.deepEqual(getHeroBackgroundStyle({}), {});
    });

    it("uses a solid color instead of an image", () => {
      const attributes = { ...defaults, backgroundType: "color", backgroundColor: "#123456" };
      const backgroundValue = getHeroBackgroundValue(attributes);
      assert.equal(backgroundValue, "#123456");
      assert.deepEqual(getHeroBackgroundStyle({ ...attributes, backgroundValue }), {
        backgroundColor: "#123456",
        backgroundImage: "none",
      });
    });

    it("configures a linear gradient with exactly two colors and an angle", () => {
      const attributes = {
        ...defaults,
        backgroundType: "gradient",
        gradientStartColor: "#123456",
        gradientEndColor: "#abcdef",
        gradientAngle: 42,
      };
      const backgroundValue = getHeroBackgroundValue(attributes);
      assert.equal(backgroundValue, "linear-gradient(42deg, #123456, #abcdef)");
      assert.deepEqual(getHeroBackgroundStyle({ ...attributes, backgroundValue }), {
        backgroundImage: backgroundValue,
      });
    });

    it("configures a radial gradient with exactly two colors", () => {
      const attributes = { ...defaults, backgroundType: "gradient", gradientType: "radial" };
      assert.equal(
        getHeroBackgroundValue(attributes),
        "radial-gradient(circle, #312f86, #8fbf29)"
      );
    });
  });
}
