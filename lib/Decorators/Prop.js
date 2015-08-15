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

const Types = reduct.propTypes;

const IDENTIFIER = '@propTypes';

export default (options) => {

    return (Component, name) => {
        let propTypes = Component[IDENTIFIER] = (Component[IDENTIFIER] || {});

        switch (options.type) {
            case 'string':
                propTypes[name] = Types.isString.isRequired;
            break;
        }
    };
};