const sections = document.querySelectorAll(".section-con");

const navigateTo = (className) => {
  sections.forEach((item) =>
    item.classList.contains(className)
      ? item.classList.add("active")
      : item.classList.remove("active")
  );
};

export default navigateTo;
