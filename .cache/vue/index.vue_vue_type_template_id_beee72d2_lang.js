'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var serverRenderer = require('vue/server-renderer');

function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><div id="app"></div><article><h1>This is a test</h1><ul><!--[-->`);
  serverRenderer.ssrRenderList($data.listItems, (listItem, index) => {
    _push(`<li>${serverRenderer.ssrInterpolate(listItem)}</li>`);
  });
  _push(`<!--]--></ul></article><!--]-->`);
}

exports.ssrRender = ssrRender;
