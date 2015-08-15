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

export default () => {

    return (CustomComponent) => {

        class Base extends Component {
            constructor (el, props) {
                super (el, {props});
            }
        }

        return (el, props) => {
            let base = new Base(el, props);

            console.log('Da prototype');

            let proto = {};
            Object.getOwnPropertyNames(CustomComponent.prototype).forEach((key) => {
                if (key !== 'constructor') {
                    proto[key] = CustomComponent.prototype[key];
                }
            });

            CustomComponent.prototype = base;

            for (let key in proto) {
                CustomComponent.prototype[key] = proto[key];
            }

            // TODO: Check prop types
            // TODO: Check event handlers

            return new CustomComponent();
        };
    };
};
