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

    test() {
        console.log(this.counter);
    }

    sliderMove() {
        this.getClickNext(this.counter);
        this.getClickPrev(this.counter);
        this.moveImg(this.counter);
        console.log(this.imgArr);
    }

    moveImg(counter) {
        this.isClicked = false;
        this.positionX;
        this.imgArr[counter].addEventListener('mousedown', (event) => {
            console.log(this.isClicked);
            console.log(this.counter);
            this.isClicked = true;
            this.positionX = event.clientX;
            console.log(this.isClicked);
        });

        this.imgArr[counter].addEventListener('mousemove', (event) =>  {
            console.log(this.isClicked);
            if(this.isClicked) {
                console.log(this.positionX, 'positionX');
                console.log(event.clientX, "event.clientX");
                window.getComputedStyle(this.wrpSlider).getPropertyValue('--counter-import-slider');
                this.wrpSlider.style.setProperty('--counter-import-slider', -((this.positionX - event.clientX)) + 'px');
            }
        });

        window.addEventListener('mouseup',  (event) => {
            // console.log(this.isClicked);
             this.isClicked = false;
             if(this.positionX - event.clientX) {
                 if(counter < (this.imgArr.length - 1)) {
                    counter = counter + 1;
                    this.actualTransition(counter);
                 }
             }
             this.positionX = event.clientX;
            //  console.log(this.counter);
            //  console.log(event.clientX);
        })
    }

    getHtmlElem(nameElem) {
       return document.querySelector(nameElem);
    }

    getHtmlElemArr(arr) {
        return document.querySelectorAll(arr);
    }

    getClickNext(counter) {
            this.btnNext.addEventListener('click', (() => {
                this.test();
                if(counter < (this.imgArr.length - 1)) {
                    this.actualTransition(counter = counter + 1);
                }
                this.moveImg(counter);
            }).bind(this));
        return counter;
    }

    // nextSlide(counter) {

    // }

    getClickPrev(counter) {
        this.btnPrev.addEventListener('click', (() => {
            if(this.counter > 0) {
                this.actualTransition(counter -= 1);
                return counter;
            }
        }).bind(this));
    }

    actualTransition(counter) {
        window.getComputedStyle(this.wrpSlider).getPropertyValue('--counter-import-slider');
        this.wrpSlider.style.setProperty('--counter-import-slider', -(counter * 600) + 'px');
    }
}