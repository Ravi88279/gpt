document.addEventListener("DOMContentLoaded", function() {
  const features = document.querySelectorAll(".feature-item");
  features.forEach((feature, index) => {
    setTimeout(() => {
      feature.classList.add("visible");
    }, index * 300);
  });
});
