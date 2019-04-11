"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getInputHeight;
function getInputHeight(_ref) {
  var lineHeight = _ref.lineHeight,
      inputPadding = _ref.inputPadding,
      displayTextPaddingVertical = _ref.displayTextPaddingVertical;

  return parseInt(lineHeight, 10) + 2 * inputPadding + 2 * displayTextPaddingVertical;
}