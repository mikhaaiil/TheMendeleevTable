document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const closeBtn = document.getElementById("closeBtn");

  const modalSymbol = document.getElementById("modal-symbol");
  const modalName = document.getElementById("modal-name");
  const modalNumber = document.getElementById("modal-number");
  const modalMass = document.getElementById("modal-mass");
  const modalPeriod = document.getElementById("modal-period");
  const modalGroup = document.getElementById("modal-group");
  const modalSubgroup = document.getElementById("modal-subgroup");

  function openModal(el) {
    modalSymbol.textContent = el.dataset.symbol;
    modalName.textContent = el.dataset.name;
    modalNumber.textContent = el.dataset.number;
    modalMass.textContent = el.dataset.mass;
    modalPeriod.textContent = el.dataset.period;
    modalGroup.textContent = el.dataset.group;
    modalSubgroup.textContent = el.dataset.subgroup;

    modal.classList.add("show");
  }

  function closeModal() {
    modal.classList.remove("show");
  }

  document.querySelectorAll(".element").forEach(el => {
    el.addEventListener("click", () => openModal(el));
  });

  closeBtn.addEventListener("click", closeModal);

  window.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
});
