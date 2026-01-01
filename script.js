/* ==============================
   PRELOADER + TÍTULO PARCEIROS
================================ */
window.addEventListener("load", function () {
  // Preloader
  const preloader = document.getElementById("preloader");
  if (preloader) {
    setTimeout(() => {
      preloader.style.opacity = "0";
      preloader.style.visibility = "hidden";
    }, 2200);
  }

  // Título animado dos parceiros
  const phrase =
    "Clareza nas informações, confiança nos resultados. Veja alguns colaboradores que trabalham conosco por anos nessa caminhada.";
  const titleEl = document.getElementById("animated-title");

  if (titleEl) {
    const words = phrase.split(" ");
    titleEl.innerHTML = words
      .map(word => `<span class="word">${word}</span>`)
      .join(" ");
  }
});

/* ==============================
   MENU HAMBÚRGUER
================================ */
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

if (hamburger && mobileMenu) {
  hamburger.addEventListener("click", () => {
    mobileMenu.style.display =
      mobileMenu.style.display === "flex" ? "none" : "flex";
  });
}

/* ==============================
   ANIMAÇÃO PARCEIROS (HOVER)
================================ */
function animateWords() {
  const titleEl = document.getElementById("animated-title");
  if (!titleEl) return;

  const spans = titleEl.querySelectorAll(".word");
  spans.forEach((span, i) => {
    setTimeout(() => {
      span.style.opacity = 1;
    }, i * 100);
  });
}

function resetWords() {
  const titleEl = document.getElementById("animated-title");
  if (!titleEl) return;

  const spans = titleEl.querySelectorAll(".word");
  spans.forEach(span => {
    span.style.opacity = 0;
  });
}

/* ==============================
   FORMULÁRIO DE CONTATO
================================ */
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contato-form");
  const mensagem = document.getElementById("mensagem-enviada");

  if (!form || !mensagem) return;

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/magnagoesarmento@gmail.com",
        {
          method: "POST",
          headers: { Accept: "application/json" },
          body: formData
        }
      );

      if (response.ok) {
        form.reset();
        mensagem.style.display = "block";
      } else {
        alert("Erro ao enviar. Tente novamente mais tarde.");
      }
    } catch (error) {
      alert("Erro na conexão. Verifique sua internet.");
    }
  });
});

/* ==============================
   FAQ ACCORDION
================================ */
const questions = document.querySelectorAll(".faq-question");

if (questions.length) {
  questions.forEach(btn => {
    btn.addEventListener("click", () => {
      const answer = btn.nextElementSibling;
      if (!answer) return;

      btn.classList.toggle("active");
      answer.style.maxHeight = answer.style.maxHeight
        ? null
        : answer.scrollHeight + "px";
    });
  });
}
