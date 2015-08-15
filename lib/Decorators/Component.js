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

import reduct from '@reduct/component';

const Component = reduct.Component;
const Types = reduct.Types;

class Base extends Component {
    constructor (el, props, propTypes) {
        super (el, {props, propTypes});
    }
}

class Helpers {
    static extractPrototype (Clazz) {
        let prototype = {};

        Object.getOwnPropertyNames(Clazz.prototype).forEach((key) => {
            if (key !== 'constructor') {
                prototype[key] = Clazz.prototype[key];
            }
        });

        return prototype;
    }

    static injectPrototype (prototype, Clazz) {

        //
        // TODO: Refactor the `propTypes` exclusion for supporting
        // default `propTypes`.
        //
        // IMPORTANT: This has to be changed in order to support
        // default values in `propTypes`.
        //

        for (let key in prototype) {
            Clazz.prototype[key] = prototype[key];
        }
    }
}

export default () => {

    return (CustomComponent) => {

        return function Wrapper (el, props) {
            let prototype = Helpers.extractPrototype(CustomComponent);

            //
            // Create an instance of the component
            //
            let base = new Base(el, props, prototype['@propTypes']);

            //
            // Adjust the prototype of the actual component
            //
            CustomComponent.prototype = base;

            //
            // Inject the prototype of the `CustomComponent`. This will
            // merge the attributes and the methods of the `CustomComponent`
            // with those from `@reduct/component`.
            //
            Helpers.injectPrototype(prototype, CustomComponent);

            let component = new CustomComponent();

            // TODO: Refactor and move into `Helper` class.
            Object.keys(prototype['@listeners']).forEach((key) => {
                let listener = prototype['@listeners'][key];

                console.log(listener);

                Array.prototype.slice.call(el.querySelectorAll(listener.selector)).forEach((node) => {
                    node.addEventListener(listener.type, (e) => {
                        e.preventDefault();
                        e.stopPropagation();

                        component[listener.method].call(component);
                    });
                });
            });

            return component;
        };
    };
};
