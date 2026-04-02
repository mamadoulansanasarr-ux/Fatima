let currentCategory = null;
let currentLevel = null;

// cacher tout
function hideAll(selector) {
  document.querySelectorAll(selector).forEach(el => {
    el.classList.add("hidden");
  });
}

// ===== CATÉGORIES =====
document.querySelectorAll(".cat-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    hideAll(".level");
    hideAll(".subject");
    hideAll(".pdf-list");

    currentCategory = btn.dataset.target;

    document.getElementById(currentCategory).classList.remove("hidden");
  });
});

// ===== NIVEAUX =====
document.querySelectorAll(".level-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    hideAll(".subject");
    hideAll(".pdf-list");

    currentLevel = btn.dataset.target;

    document.getElementById(currentLevel).classList.remove("hidden");
  });
});

// ===== MATIÈRES =====
document.querySelectorAll(".subject-btn").forEach(btn => {
  btn.addEventListener("click", () => {

    hideAll(".pdf-list");

    let matiere = btn.dataset.target;

    // construire ID
    let id = currentCategory + "-" + currentLevel + "-" + matiere;

    let element = document.getElementById(id);

    if (element) {
      element.classList.remove("hidden");
    } else {
      console.log("Introuvable :", id);
    }
  });
});