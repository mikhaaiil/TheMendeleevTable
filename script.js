document.addEventListener("DOMContentLoaded", () => {
  const plate = document.getElementById("plate");
  const openBtn = document.getElementById("naming");
  const closeBtn = document.getElementById("closeBtn");

  openBtn.addEventListener("click", () => {
    plate.classList.add("active"); // slide in
  });

  closeBtn.addEventListener("click", () => {
    plate.classList.remove("active"); // slide out
  });
});
