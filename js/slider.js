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
        this.moveImg();
    }

    moveImg() {
        this.isClicked = false;
        this.positionX;
        this.wrpSlider.addEventListener('mousedown', (event) => {
            this.isClicked = true;
            this.positionX = event.clientX;
            console.log(this.isClicked);

        });
        console.log(this.isClicked);

        this.wrpSlider.addEventListener('mousemove', (event) =>  {
            if(this.isClicked) {
                if(this.counter === 0 || this.counter === 1) {
                    this.counter = 1;
                    console.log(this.counter);
                    window.getComputedStyle(this.wrpSlider).getPropertyValue('--counter-import-slider');
                    this.wrpSlider.style.setProperty('--counter-import-slider', -((this.positionX - event.clientX)) + 'px');
                }
            }
        });

        window.addEventListener('mouseup', (event) => {

             this.isClicked = false;
             if(this.positionX - event.clientX) {
                 this.counter = this.counter + 1;
                 this.actualTransition(this.counter);
             }
        })
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