/* ========================================
   SCRIPT DE NAVIGATION INTERACTIVE
   ======================================== */

// Attendre que le DOM soit complètement chargé avant d'exécuter le script
document.addEventListener("DOMContentLoaded", function () {
  /* ========================================
     ÉLÉMENTS DOM PRINCIPAUX
     ======================================== */

  // Récupération du bouton hamburger pour mobile
  const menuToggle = document.getElementById("menuToggle");

  // Récupération du menu de navigation
  const navMenu = document.getElementById("navMenu");

  /* ========================================
     GESTION DU MENU HAMBURGER
     ======================================== */

  // Écouteur d'événement pour le clic sur le bouton hamburger
  menuToggle.addEventListener("click", function () {
    // Bascule la classe 'active' pour afficher/masquer le menu
    navMenu.classList.toggle("active");
  });

  /* ========================================
     FERMETURE DU MENU LORS DU CLIC SUR UN LIEN
     ======================================== */

  // Récupération de tous les liens du menu de navigation
  const navLinks = document.querySelectorAll(".nav-menu a");

  // Ajout d'un écouteur d'événement sur chaque lien
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // Supprime la classe 'active' pour fermer le menu
      navMenu.classList.remove("active");
    });
  });

  /* ========================================
     FERMETURE DU MENU LORS DU CLIC EN DEHORS
     ======================================== */

  // Écouteur d'événement sur tout le document
  document.addEventListener("click", function (event) {
    // Vérifie si le clic n'est ni sur le bouton hamburger ni sur le menu
    if (!menuToggle.contains(event.target) && !navMenu.contains(event.target)) {
      // Ferme le menu en supprimant la classe 'active'
      navMenu.classList.remove("active");
    }
  });
});
