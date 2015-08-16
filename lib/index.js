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

import {Component, Prop, Action} from './Decorators/index';

import {DOMUtils} from './Utilities/index';

@Component()
class Lightfold {

    @Prop({type: 'string'})
    message = null;

    constructor () {
        console.log('Lightfold instantiated');

        DOMUtils.query('[data-open]', this.getElement());
        DOMUtils.query('[data-open]', this.getElement());
    }

    @Action('click [data-open]')
    open () {
        console.log(this.getProp('message'));
    }

    @Action('click [data-close]')
    close () {
        console.log('CLOSE');
    }
}

export default Lightfold;
