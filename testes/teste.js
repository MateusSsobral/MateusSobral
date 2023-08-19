var carouselImgs = new Carousel({
    container: 'laptop-slider .slideshow',
    itens:'figure',
    btnPrev: '.prev',
    btnNext: '.next'
})
function Carousel(config){
    this.container = (typeof config.container === 'string') ?
    document.querySelector(config.container) : config.container

    this.itens = (typeof config.itens === 'string') ? this.container.querySelector(config.itens) : config.itens

    this.btnPrev = (typeof config.btnPrev=== 'string') ? this.container.querySelector(config.itens) : config.itens

    this.btnNext = (typeof config.btnNext === 'string') ? this.container.querySelector(config.itens) : config.itens

var _this = this;

}
