const AnimatedTags = document.querySelectorAll(".animate, .ao-logo");

const Header = document.querySelector("header.fixed");

const Hero = document.querySelector(".hero");

const headerShow = () => {
  const HeroBottom = Hero.getBoundingClientRect().bottom;
  if (HeroBottom < 0) {
    Header.classList.add("show");
  } else {
    Header.classList.remove("show");
  }
};

AnimatedTags.forEach((tag) => {
  tag.style.opacity = 0;
});

const fadeIn = () => {
  let delay = 0.3;

  AnimatedTags.forEach((tag, index) => {
    const tagTop = tag.getBoundingClientRect().top;
    const tagBottom = tag.getBoundingClientRect().bottom;

    if (tagTop < window.innerHeight && tagBottom > 0) {
      tag.style.animation = `fadeIn 1s ${delay}s both`;
      delay = delay + 0.02;
    } else {
      tag.style.opacity = 0;
      tag.style.animation = "";
    }
  });
};

fadeIn();

document.addEventListener("scroll", () => {
  fadeIn();
  headerShow();
});

window.addEventListener("resize", () => {
  fadeIn();
});

const Titles = document.querySelectorAll(".intro-animation");

Titles.forEach((title, index) => {
  title.style.animation = `fadeIn 1s ${index / 2}s both`;
});

const sizeGuideButton = document.getElementById("size-button");
const sizeSelector = document.querySelector(".size-selector");
const index = document.getElementById("index");

if (index) {
  const addressTwoTag = document.getElementById("address-two");
  const addressTwoLabeltag = document.getElementById("address-two-label");

  const emailTag = document.getElementById("email");
  const emailLabeltag = document.getElementById("email-label");

  const checkValue = function (text, label) {
    const value = text.value.trim();
    if (value) {
      label.classList.add("valid-form");
    } else {
      label.classList.remove("valid-form");
    }
  };

  addressTwoTag.addEventListener("focus", (evt) => {
    addressTwoLabeltag.classList.add("valid-form");
  });

  addressTwoTag.addEventListener("blur", (evt) => {
    addressTwoLabeltag.classList.remove("valid-form");
    checkValue(addressTwoTag, addressTwoLabeltag);
  });

  addressTwoTag.addEventListener("input", (evt) => {
    checkValue(addressTwoTag, addressTwoLabeltag);
  });

  emailTag.addEventListener("focus", (evt) => {
    emailLabeltag.classList.add("valid-form");
  });

  emailTag.addEventListener("blur", (evt) => {
    emailLabeltag.classList.remove("valid-form");
    checkValue(emailTag, emailLabeltag);
  });

  emailTag.addEventListener("input", (evt) => {
    checkValue(emailTag, emailLabeltag);
  });
}
