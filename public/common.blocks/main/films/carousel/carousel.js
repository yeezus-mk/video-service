$('.carousel').slick({
  infinite: true,
  dots: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 3500,
  useTransforms: false,
  arrows: true,
  useCSS: false,
  responsive: [
    {
      breakpoint: 1020,
      settings: {
        centerMode: true
      }
    }
  ]
});