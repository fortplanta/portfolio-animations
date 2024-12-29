import {gsap} from 'gsap';
import {Flip} from 'gsap/Flip';

gsap.registerPlugin(Flip); 

export default class Intro {
    constructor() {
        this.state = null;
        this.centerImage = document.querySelector('.intro__center-image img');
        this.centerImageWrapper = document.querySelector('.intro__center-image');
        this.imagesWrapper = document.querySelector('.intro__images');
        this.images = [...this.imagesWrapper.querySelectorAll('img')];

        this._getFinalState();
        this._setInitialState();
    }
    _getFinalState() {
        gsap.set([this.images, this.centerImageWrapper],
            xPercent
        )
    }
    _setInitialState() {

    }
}