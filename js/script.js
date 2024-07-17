const servicesRightSlider = new Splide('#inner-slider-right', {
    type: 'loop',
    // rewind: true,
    autoWidth: true,
    autoHeight: true,
    // autoplay: true,
    // interval: 2500,
    // speed: 400,
    // arrows: false,
    // pagination: false,
    drag: "free",
    focus: 'center',
    arrows: false,
    pagination: false,
    autoScroll: {
        autoStart: true,
        pauseOnFocus: false,
        pauseOnHover: true,
        speed: 1,
    },
    // gap: '3rem',

});

const servicesLeftSlider = new Splide('#inner-slider-left', {
    type: 'loop',
    // rewind: true,
    autoWidth: true,
    autoHeight: true,
    // autoplay: true,
    // interval: 2500,
    // speed: 400,
    // arrows: false,
    // pagination: false,
    drag: "free",
    focus: 'center',
    arrows: false,
    pagination: false,
    autoScroll: {
        autoStart: true,
        pauseOnFocus: false,
        pauseOnHover: true,
        speed: -1,
    },
    // gap: '3rem',

});

servicesRightSlider.mount(window.splide.Extensions);
servicesLeftSlider.mount(window.splide.Extensions);
