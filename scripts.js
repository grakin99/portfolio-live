const intersectionCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let elem = entry.target;
      if (entry.intersectionRatio >= 0.75) {
        elem.classList.add("animate");
      }
    }
  });
};

const Animateditems = document.querySelectorAll("div.text");
let options = {
  threshold: 1.0,
};
let observer = new IntersectionObserver(intersectionCallback, options);

Animateditems.forEach((item) => {
  observer.observe(item);
});
