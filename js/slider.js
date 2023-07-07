export let SliderBr = class {
    counter = 0;

    constructor(slider, wrpSlider, btnPrev, btnNext, imgArr) {
        this.slider = this.getHtmlElem(slider);
        this.wrpSlider = this.getHtmlElem(wrpSlider);
        this.btnPrev = this.getHtmlElem(btnPrev);
        this.btnNext = this.getHtmlElem(btnNext);
        this.imgArr = this.getHtmlElemArr(imgArr);

        this.sliderMove(); // Вызов метода sliderMove()
    }

    sliderMove() {
        this.getClickNext();
        this.getClickPrev();
        // this.moveImg();
        // this.test();
        // console.log(this.imgArr);
    }

    test() {
        console.log(this.counter);
    }

    // moveImg() {
    //     this.isClicked = false;
    //     this.positionX;

    //     this.imgArr[this.counter].addEventListener('mousedown', (event) => {
    //         console.log(this.isClicked);
    //         console.log(this.counter);
    //         this.isClicked = true;
    //         this.positionX = event.clientX;
    //         console.log(this.isClicked);
    //     });

    //     this.imgArr[this.counter].addEventListener('mousemove', (event) =>  {
    //         console.log(this.isClicked);
    //         if (this.isClicked) {
    //             console.log(this.positionX, 'positionX');
    //             console.log(event.clientX, "event.clientX");
    //             window.getComputedStyle(this.wrpSlider).getPropertyValue('--counter-import-slider');
    //             this.wrpSlider.style.setProperty('--counter-import-slider', -((this.positionX - event.clientX)) + 'px');
    //         }
    //     });

    //     window.addEventListener('mouseup', (event) => {
    //         this.isClicked = false;
    //         if (this.positionX - event.clientX) {
    //             if (this.counter < (this.imgArr.length - 1)) {
    //                 this.counter = this.counter + 1;
    //                 this.actualTransition();
    //             }
    //         }
    //         this.positionX = event.clientX;
    //     });
    // }

    getHtmlElem(nameElem) {
        return document.querySelector(nameElem);
    }

    getHtmlElemArr(arr) {
        return document.querySelectorAll(arr);
    }

    getClickNext() {
        this.btnNext.addEventListener('click', () => {
            console.log(this.imgArr.length - 1);
            console.log(this.counter);
            if (this.counter < (this.imgArr.length - 1)) {
                this.counter = this.counter + 1;
                // this.actualTransition();
            }
            this.moveImg();
        });
    }

    getClickPrev() {
        this.btnPrev.addEventListener('click', () => {
            if (this.counter > 0) {
                this.counter -= 1;
                this.actualTransition();
            }
        });
    }

    actualTransition() {
        window.getComputedStyle(this.wrpSlider).getPropertyValue('--counter-import-slider');
        this.wrpSlider.style.setProperty('--counter-import-slider', -(this.counter * 600) + 'px');
    }
};
