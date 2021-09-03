let navModal = document.querySelector(".nav-menu-modal");

let menuBtn = document.querySelector(".nav-menu");

menuBtn.onclick = () => {
  navModal.style.display = "block";
};

window.onclick = (event) => {
  if (event.target == navModal) {
    navModal.style.display = "none";
  }
};
