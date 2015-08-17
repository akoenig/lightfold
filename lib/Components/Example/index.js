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

import {Component, Prop, Action} from '../../Decorators/index';

@Component()
class Example {

    @Prop({type: 'string'})
    message = '';

    @Action('click [data-say-something]')
    saySomething () {
        console.log(this.getProp('message'));
    }
}

export default Example;
