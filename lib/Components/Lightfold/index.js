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

import {Component, Prop, Action} from '../../Decorators/index';

import {DOMUtils} from '../../Utilities/index';

@Component()
class Lightfold {

    @Prop({type: 'string'})
    activeClass = '';

    @Prop({type: 'string'})
    overlaySelector = '';

    @Prop({type: 'string'})
    slidesSelector = '';

    @Prop({type: 'string'})
    frontSelector = '';

    @Prop({type: 'string'})
    backSelector = '';

    @Prop({type: 'string'})
    imageSelector = '';

    constructor () {
        console.log('constructor')
        console.log(this.getElement());
    }

    dom (selector) {
        return DOMUtils.query(selector, this.getElement());
    }

    toggleVisibility () {
        this.getElement().classList.toggle(this.getProp('activeClass'));
    }

    @Action('click [data-open]')
    open () {
        const overlay = this.dom(this.getProp('overlaySelector')).shift();
        const slides = this.dom(this.getProp('slidesSelector')).shift();
        const back = this.dom(this.getProp('backSelector')).shift();
        const front = this.dom(this.getProp('frontSelector')).shift();

        const image = this.dom(this.getProp('imageSelector')).shift();

        const imageURL = image.getAttribute(this.getProp('imageSelector').replace('[', '').replace(']', ''));

        let load = () => {
            image.removeEventListener('load', load);

            slides.style.width = front.style.width = back.style.width = `${image.width}px`;
            slides.style.height = front.style.height = back.style.height = `${image.height}px`;

            this.toggleVisibility();
        };

        let transition = () => {
            overlay.removeEventListener('transitionend', transition);

            velocity.animate(slides, {opacity: 1}, {duration: 500, easing: 'easeInQuad'});
            velocity.animate(front, {opacity: 0}, {duration: 1000, delay: 1200});
        };

        overlay.addEventListener('transitionend', transition);

        image.addEventListener('load', load);
        image.setAttribute('src', `${imageURL}`);
    }

    @Action('click [data-close]')
    close () {
        const overlay = this.dom(this.getProp('overlaySelector')).shift();

        let transition = () => {
            overlay.removeEventListener('transitionend', transition);

            const front = this.dom(this.getProp('frontSelector')).shift();
            front.style.opacity = 1;
        };

        overlay.addEventListener('transitionend', transition);

        this.toggleVisibility();
    }
}

export default Lightfold;
