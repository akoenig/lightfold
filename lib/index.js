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
import {dom} from './Utilities/index';

const Component = reduct.Component;
const Types = reduct.propTypes;

const propTypes = {
    triggerSelector: Types.isString.isRequired
};

class Lightfold extends Component {

    constructor (el, props) {
        super(el, {props, propTypes});

        this.dom = dom(this.el);

        this.dom.attach(this.getProp('triggerSelector'), 'click', () => this.open());
    }

    getDefaultProps () {
        return {
            triggerSelector: '[data-trigger]'
        };
    }

    open () {
        console.log('CLICK');
    }
}

export default Lightfold;
