////////////////////////////////////////////////////////////////////////////////
// vue3 モジュール
////////////////////////////////////////////////////////////////////////////////
import * as Vue from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

////////////////////////////////////////////////////////////////////////////////
// vue3-sfc-loader モジュール
////////////////////////////////////////////////////////////////////////////////
import { loadModule } from "https://cdn.jsdelivr.net/npm/vue3-sfc-loader@0.8.4/dist/vue3-sfc-loader.esm.js";

////////////////////////////////////////////////////////////////////////////////
// vue3-sfc-loader オプション
// SFCファイルから外部のモジュールをimportできるオプション
// 参考：https://github.com/FranckFreiburger/vue3-sfc-loader/issues/14#issuecomment-908849863
////////////////////////////////////////////////////////////////////////////////
const vue3_sfc_loader_options = {
    moduleCache: { vue: Vue },
    getFile(url) {
        url = /.*?\.js|.mjs|.css|.less|.vue$/.test(url)
            ? url
            : `${url}.vue`;
        const type = /.*?\.js|.mjs$/.test(url)
            ? ".mjs"
            : /.*?\.vue$/.test(url)
            ? ".vue"
            : /.*?\.css$/.test(url)
            ? ".css"
            : ".vue";
        const getContentData = (asBinary) =>
            fetch(url).then((res) =>
                !res.ok
                    ? Promise.reject(url)
                    : asBinary
                    ? res.arrayBuffer()
                    : res.text()
            );
        return { getContentData: getContentData, type: type };
    },
    addStyle(textContent) {
        let styleElement = document.createElement("style");
        document.head.insertBefore(
            Object.assign(styleElement, { textContent }),
            document.head.getElementsByTagName("style")[0] || null
        );
    },
    handleModule(type, getContentData, path, options) {
        switch (type) {
            case ".css":
                return options.addStyle(getContentData(false));
            case ".less":
                console.error(".......");
        }
    },
    log(type, ...args) {
        console.log(type, ...args);
    },
};

//Appコンポーネントをマウントするラッパー関数
export default function MountSFC(vueFile, querySelector){
    const app = Vue.createApp(
        Vue.defineAsyncComponent(
            () => loadModule(vueFile, vue3_sfc_loader_options)
        ),
    )
    app.mount(querySelector);
}