'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var serverRenderer = require('vue/server-renderer');

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<main${serverRenderer.ssrRenderAttrs(_attrs)}><p>Hello from a Vue component.</p></main>`);
}

exports.ssrRender = ssrRender;
