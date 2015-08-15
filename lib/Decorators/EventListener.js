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

import {dom} from '../Utilities/index';

export default (type) => {

    let decorator = (selector) => {
        return (target, name, descriptor) => {
            
        };
    };

    return {
        on (selector) {
            return decorator(selector);
        }
    };

};