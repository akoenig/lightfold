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

import {Component, Prop} from './Decorators/index';

@Component()
class Lightfold {

    @Prop({type: 'string'})
    message = 'Hello World';

    constructor () {

        this.open();
    }

    open () {
        console.log(this.getProp('message'));
    }
}

export default Lightfold;
