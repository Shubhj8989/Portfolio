const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

const btn = document.querySelector("button");
const page2 = document.querySelector(".page2");

btn.addEventListener("click", function () {
  page2.scrollIntoView({ behavior: "smooth" });
});
