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

import {Component, Prop, Event} from './Decorators/index';

@Component()
class Lightfold {

    @Prop({type: 'string'})
    message = null;

    @Event('click [data-trigger]')
    open () {
        console.log(this.getProp('message'));
    }
}

export default Lightfold;
