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

class DOM {

    constructor (el) {
        this.el = el;
        this.cache = {};
    }

    query (selector) {
        if (!this.cache[selector]) {
            this.cache[selector] = Array.prototype.slice.call(this.el.querySelectorAll(selector));
        }

        return this.cache[selector];
    }

    attach (selector, type, handler) {
        let nodes = this.query(selector);

        let dispatch = (handler) => {
            return (e) => {
                e.preventDefault();
                e.stopPropagation();

                handler();
            };
        };

        nodes.forEach((node) => node.addEventListener(type, dispatch(handler)));
    }
}

export default (rootNode) => {
    let dom = new DOM(rootNode);

    return {
        query: (selector) => dom.query(selector),
        attach: (selector, type, handler) => dom.attach(selector, type, handler)
    };
};
