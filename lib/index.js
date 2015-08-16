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

import velocity from 'velocity-animate';

import {Component, Prop, Action} from './Decorators/index';

import {DOMUtils} from './Utilities/index';

@Component()
class Lightfold {

    @Prop({type: 'string'})
    overlaySelector = null;

    @Prop({type: 'string'})
    contentsSelector = null;

    constructor () {
        console.log('Lightfold instantiated');
    }

    dom (selector) {
        return DOMUtils.query(selector, this.getElement());
    }

    @Action('click [data-open]')
    open () {
        const overlay = this.dom(this.getProp('overlaySelector')).shift();
        const contents = this.dom(this.getProp('contentsSelector')).shift();

        velocity.animate(contents, {scale: 0}, {display: 'none', duration: 10})
            .then(() => {
                return velocity.animate(overlay, {opacity: 1}, {visibility: 'visible', duration: 500});
            })
            .then(() => {
                return velocity.animate(contents, {scale: 1}, {display: 'block', duration: 180});
            })
            .then(() => {
                // load image
                // TODO: Refactor image loading
                const image = this.dom('[data-image]').shift();

                return new Promise((resolve, reject) => {
                    let load = () => {
                        image.removeEventListener('load', load);

                        resolve();
                    };

                    image.addEventListener('load', load);

                    image.setAttribute('src', 'http://cdn.playbuzz.com/cdn/0079c830-3406-4c05-a5c1-bc43e8f01479/7dd84d70-768b-492b-88f7-a6c70f2db2e9.jpg');
                });
            })
    }

    @Action('click [data-close]')
    close () {
        console.log('CLOSE');
    }
}

export default Lightfold;
