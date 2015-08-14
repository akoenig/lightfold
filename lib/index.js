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
const Types = reduct.propTypes;

const propTypes = {};

class Lightfold extends Component {

    constructor (el, props) {
        super(el, {props, propTypes});

        console.log('START');
    }

}

export default Lightfold;
