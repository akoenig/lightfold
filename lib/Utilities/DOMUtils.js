/*
 * lightfold
 *
 * Copyright(c) 2015 André König <andre.koenig@posteo.de>
 * MIT Licensed
 *
 */

/**
 * @author André König <andre.koenig@posteo.de>
 *
 */

class DOMUtils {

    //
    // node: {'<selector>': []}
    //
    cache = {};

    query (selector, rootNode) {
        rootNode = rootNode || document;

        if (!this.cache[rootNode]) {
            this.cache[rootNode] = {};
        }

        let cache = this.cache[rootNode][selector] = (this.cache[rootNode][selector] || []);

        if (cache.length) {
            return cache;
        }

        const nodes = Array.prototype.slice.call(rootNode.querySelectorAll(selector));

        Array.prototype.push.apply(cache, nodes);

        return nodes;
    }

    attach(selector, rootNode, type, handler) {
        let nodes = this.query(selector, rootNode);

        nodes.forEach((node) => {
            node.addEventListener(type, (e) => {
                e.preventDefault();
                e.stopPropagation();

                handler();
            });
        });
    }
}

let API = null;

export default (() => {
    if (!API) {
        API = {};

        let instance = new DOMUtils();

        API.query = (selector, rootNode) => instance.query(selector, rootNode);
        API.attach = (selector, rootNode, type, handler) => instance.attach(selector, rootNode, type, handler);
    }

    return API;
})();
