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

const IDENTIFIER = '@actions';

export default (declaration) => {

    const parts = declaration.split(' ');
    const type = parts[0];
    const selector = parts[1];

    return (Component, name, method) => {
        let actions = Component[IDENTIFIER] = (Component[IDENTIFIER] || {});

        actions[declaration] = {type, selector, method: name};
    };
};