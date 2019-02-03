class Carousel {
    constructor(element) {
        this.leftBtn = element.querySelector('.left-button');
        this.rightBtn = element.querySelector('.right-button')
        this.images = element.querySelectorAll('img')
        this.imagesLength = this.images.length;

        this.images[0].style.display = 'flex';

        this.current = 0;

        this.leftBtn.addEventListener('click', () => this.previous())
        this.rightBtn.addEventListener('click', () => this.next())


    }

    previous() {
        this.images.forEach(item => item.style.display = 'none')
        if (this.current === 0) {
            this.current = 4
        }
        --this.current;
        this.images[this.current].style.display = 'flex'
        
    }
    next() {
        this.images.forEach(item => item.style.display = 'none')
        if (this.current === 3) {
            this.current = -1
        }
        ++this.current;
        this.images[this.current].style.display = 'flex'


    }

}

let carousel = document.querySelector('.carousel');
let carouselObj = new Carousel(carousel)
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/