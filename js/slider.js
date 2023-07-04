export let SliderBr = class {
    counter = 0;
    constructor(slider, wrpSlider, btnPrev, btnNext, imgArr)
    {
        this.slider = this.getHtmlElem(slider);
        this.wrpSlider = this.getHtmlElem(wrpSlider);
        this.btnPrev = this.getHtmlElem(btnPrev);
        this.btnNext = this.getHtmlElem(btnNext);
        this.imgArr = this.getHtmlElemArr(imgArr);
    }

    sliderMove() {
        this.getClickNext();
        this.getClickPrev();
    }

    getHtmlElem(nameElem) {
       return document.querySelector(nameElem);
    }

    getHtmlElemArr(arr) {
        return document.querySelectorAll(arr);
    }

    getClickNext() {
        this.btnNext.addEventListener('click', () => {
            if(this.counter < (this.imgArr.length - 1)) {
                this.actualTransition(this.counter = this.counter + 1);
                return this.counter;
            }
        });
    }

    getClickPrev() {
        this.btnPrev.addEventListener('click', () => {
            if(this.counter >= 0) {
                this.actualTransition(this.counter -= 1);
                return this.counter;
            }
        });
    }

    actualTransition(counter) {
        window.getComputedStyle(this.wrpSlider).getPropertyValue('--counter-import-slider');
        this.wrpSlider.style.setProperty('--counter-import-slider', -(counter * 600) + 'px');
    }
}