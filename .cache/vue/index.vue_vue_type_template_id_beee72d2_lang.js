'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var serverRenderer = require('vue/server-renderer');

function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_room_with_a = vue.resolveComponent("room-with-a");

  _push(`<!--[-->`);
  _push(serverRenderer.ssrRenderComponent(_component_room_with_a, null, null, _parent));
  _push(`<article><h1>This is a test</h1><ul><!--[-->`);
  serverRenderer.ssrRenderList($data.listItems, (listItem, index) => {
    _push(`<li>${serverRenderer.ssrInterpolate(listItem)}</li>`);
  });
  _push(`<!--]--></ul></article><!--]-->`);
}

exports.ssrRender = ssrRender;
