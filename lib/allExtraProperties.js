"use strict";

/**
 * This file contains all implemented properties that are not a part of any
 * current specifications or drafts, but are handled by browsers nevertheless.
 */

const allWebkitProperties = require("./allWebkitProperties");

module.exports = new Set([
  "background-position-x",
  "background-position-y",
  "background-repeat-x",
  "background-repeat-y",
  "color-interpolation",
  "color-profile",
  "color-rendering",
  "enable-background",
  "glyph-orientation-horizontal",
  "kerning",
  "marker-offset",
  "marks",
  "pointer-events",
  "shape-rendering",
  "size",
  "src",
  "stop-color",
  "stop-opacity",
  "text-anchor",
  "text-line-through",
  "text-line-through-color",
  "text-line-through-mode",
  "text-line-through-style",
  "text-line-through-width",
  "text-overline",
  "text-overline-color",
  "text-overline-mode",
  "text-overline-style",
  "text-overline-width",
  "text-rendering",
  "text-underline",
  "text-underline-color",
  "text-underline-mode",
  "text-underline-style",
  "text-underline-width",
  "unicode-range",
  "vector-effect",
  ...allWebkitProperties
]);
