const main__img = document.getElementById("main__img");
const text_1 = document.getElementById("text_1");
const text_2 = document.getElementById("text_2");
const elipsis_1 = document.getElementById("elipsis_1");
const elipsis_2 = document.getElementById("elipsis_2");

elipsis_1.onclick = function () {
    if (elipsis_1.classList.contains("active") == false) {
        elipsis_1.classList.add("active");
        elipsis_2.classList.remove("active");
        main__img.style.transform = "translateX(100vw)";
        text_1.style.transform = "translateX(100vw)";
        text_2.style.transform = "translateX(100vw)";
        setTimeout(() => {
          main__img.src = "src/assets/img/starter-1.png";
          text_1.textContent = "Produtos feitos a mão com a melhor qualidade";
          text_2.textContent = "Produtos com qualidade garantida";
          main__img.style.transition = "0s";
          main__img.style.transform = "translateX(-100vw)";
          text_1.style.transition = "0s";
          text_2.style.transition = "0s";
          text_1.style.transform = "translateX(-100vw)";
          text_2.style.transform = "translateX(-100vw)";
          setTimeout(() => {
            main__img.style.transition = "0.5s";
            main__img.style.transform = "translateX(0px)";
            text_1.style.transition = "0.5s";
            text_2.style.transition = "0.5s";
            text_1.style.transform = "translateX(0px)";
            text_2.style.transform = "translateX(0px)";
          }, 500);
        }, 500);
      }
};

elipsis_2.onclick = function () {
  if (elipsis_2.classList.contains("active") == false) {
    elipsis_1.classList.remove("active");
    elipsis_2.classList.add("active");
    main__img.style.transform = "translateX(-100vw)";
    text_1.style.transform = "translateX(-100vw)";
    text_2.style.transform = "translateX(-100vw)";
    setTimeout(() => {
      main__img.src = "src/assets/img/starter-2.png";
      text_1.textContent = "Movéis e decorações com sua personalidade";
      text_2.textContent = "Experimente os produtos personalizados";
      main__img.style.transition = "0s";
      main__img.style.transform = "translateX(100vw)";
      text_1.style.transition = "0s";
      text_2.style.transition = "0s";
      text_1.style.transform = "translateX(100vw)";
      text_2.style.transform = "translateX(100vw)";
      setTimeout(() => {
        main__img.style.transition = "0.5s";
        main__img.style.transform = "translateX(0px)";
        text_1.style.transition = "0.5s";
        text_2.style.transition = "0.5s";
        text_1.style.transform = "translateX(0px)";
        text_2.style.transform = "translateX(0px)";
      }, 500);
    }, 500);
  }
};
