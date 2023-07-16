(function (doc, win) {
  "use strict";
  const workSection = doc.querySelector(".js-work-section");

  const setupSliderButtons = () => {
    const sliderButtonsMarkup = `
    <div class="slider__buttons">
      <button type="button" class="js-a11y-slider-prev">
        <img
          src="/svg/icon-arrow-left.svg"
          alt="Previous"
          width="15"
          height="16"
          loading="lazy"
          decoding="async"
        />
      </button>
      <button type="button" class="js-a11y-slider-next">
        <img
          src="/svg/icon-arrow-right.svg"
          alt="Next"
          width="15"
          height="16"
          loading="lazy"
          decoding="async"
        />
      </button>
    </div>
    `;
    workSection.insertAdjacentHTML("beforeend", sliderButtonsMarkup);
  };

  const setupSlider = () => {
    setupSliderButtons();
    const nextButton = workSection.querySelector(".js-a11y-slider-next");
    const prevButton = workSection.querySelector(".js-a11y-slider-prev");
    const sliderSettings = {
      adaptiveHeight: true,
      dots: false,
      prevArrow: prevButton,
      nextArrow: nextButton
    };
    new A11YSlider(workSection.querySelector(".js-slider"), sliderSettings);
  };

  // Setup the slider when the whole page has loaded (including the a11y-slider)
  win.addEventListener("load", setupSlider);
  doc.documentElement.className = "js";
})(document, window);
