window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    setTimeout(() => {
      preloader.style.opacity = "0";
      preloader.style.visibility = "hidden";
    }, 2200);
  }

  const phrase =
    "Clareza nas informações, confiança nos resultados. Veja alguns colaboradores que trabalham conosco por anos nessa caminhada.";
  const titleEl = document.getElementById("animated-title");

  if (titleEl) {
    const words = phrase.split(" ");
    titleEl.innerHTML = words
      .map(word => `<span class="word" style="opacity:0; display:inline-block; transition: opacity 0.3s;">${word}</span>`)
      .join(" ");

    const wordEls = titleEl.querySelectorAll(".word");
    wordEls.forEach((word, index) => {
      setTimeout(() => {
        word.style.opacity = "1";
      }, index * 100); 
    });
  }
});

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

