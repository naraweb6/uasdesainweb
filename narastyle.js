function toggleNav() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("show");
}

function setActive(element) {
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(link => link.classList.remove('active'));
  element.classList.add('active');
}

function buttonClick(message) {
    const btn = event.target;
    btn.classList.add("clicked");
    alert(message);
    setTimeout(() => {
      btn.classList.remove("clicked");
    }, 300);
  }