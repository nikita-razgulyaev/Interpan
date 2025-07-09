function scrollToHome() {
  const section = document.getElementById('home');
  const sectionPosition = section.getBoundingClientRect().top + window.scrollY;

  window.scrollTo({
    top: sectionPosition,
    behavior: 'smooth'
  });
}

function scrollToAboutUS() {
  const section = document.getElementById('aboutUs');
  const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = sectionPosition - 100;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

function scrollToProducts() {
  const section = document.getElementById('products');
  const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = sectionPosition - 10;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

function scrollToNews() {
  const section = document.getElementById('news');
  const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = sectionPosition - 10;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

function scrollToPartners() {
  const section = document.getElementById('partners');
  const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = sectionPosition - 120;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

function scrollToContacts() {
  const section = document.getElementById('contacts');
  const sectionPosition = section.getBoundingClientRect().top + window.scrollY;

  window.scrollTo({
    top: sectionPosition,
    behavior: 'smooth'
  });
}

function scrollToFeedback() {
  const section = document.getElementById('feedback');
  const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = sectionPosition - 270;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const sliderImages = document.querySelectorAll(".home__slider-image");
  const sliderTexts = document.querySelectorAll(".home__slider-text"); // Получаем все текстовые блоки
  const prevBtn = document.getElementById("homePrevBtn");
  const nextBtn = document.getElementById("homeNextBtn");
  let currentIndex = 0;

  function showImage(index) {
    // Скрываем все изображения
    sliderImages.forEach((img) => {
      img.classList.remove("--active");
      img.classList.add("--hidden");
    });

    // Показываем текущее изображение
    sliderImages[index].classList.remove("--hidden");
    sliderImages[index].classList.add("--active");

    // Скрываем все текстовые блоки
    sliderTexts.forEach((text) => {
      text.classList.remove("--active-text");
      text.classList.add("--hidden-text");
    });

    // Показываем соответствующий текстовый блок
    sliderTexts[index].classList.remove("--hidden-text");
    sliderTexts[index].classList.add("--active-text");
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % sliderImages.length;
    showImage(currentIndex);
  }

  function prevImage() {
    currentIndex =
      (currentIndex - 1 + sliderImages.length) % sliderImages.length;
    showImage(currentIndex);
  }

  // Добавляем обработчики событий для кнопок
  nextBtn.addEventListener("click", nextImage);
  prevBtn.addEventListener("click", prevImage);

  // Инициализируем слайдер, показывая первое изображение и соответствующий текст
  showImage(currentIndex);
});

function openAndClosePoint1() {
  const schemePoint1 = document.querySelector(".scheme__scheme-point.--1");

  schemePoint1.addEventListener("mouseover", () => {
    schemePoint1.classList.add("--active");
  });
  schemePoint1.addEventListener("mouseout", () => {
    schemePoint1.classList.remove("--active");
    schemePoint1.classList.add("--no-active");
    setTimeout(schemePoint1.classList.remove("--no-active"), 1000);
  });
}
openAndClosePoint1();

function openAndClosePoint2() {
  const schemePoint2 = document.querySelector(".scheme__scheme-point.--2");

  schemePoint2.addEventListener("mouseover", () => {
    schemePoint2.classList.add("--active");
  });
  schemePoint2.addEventListener("mouseout", () => {
    schemePoint2.classList.remove("--active");
    schemePoint2.classList.add("--no-active");
    setTimeout(schemePoint2.classList.remove("--no-active"), 1000);
  });
}
openAndClosePoint2();

function openAndClosePoint3() {
  const schemePoint3 = document.querySelector(".scheme__scheme-point.--3");

  schemePoint3.addEventListener("mouseover", () => {
    schemePoint3.classList.add("--active");
  });
  schemePoint3.addEventListener("mouseout", () => {
    schemePoint3.classList.remove("--active");
    schemePoint3.classList.add("--no-active");
    setTimeout(schemePoint3.classList.remove("--no-active"), 1000);
  });
}
openAndClosePoint3();

function openAndClosePoint4() {
  const schemePoint4 = document.querySelector(".scheme__scheme-point.--4");

  schemePoint4.addEventListener("mouseover", () => {
    schemePoint4.classList.add("--active");
  });
  schemePoint4.addEventListener("mouseout", () => {
    schemePoint4.classList.remove("--active");
    schemePoint4.classList.add("--no-active");
    setTimeout(schemePoint4.classList.remove("--no-active"), 1000);
  });
}
openAndClosePoint4();

function openAndClosePoint5() {
  const schemePoint5 = document.querySelector(".scheme__scheme-point.--5");

  schemePoint5.addEventListener("mouseover", () => {
    schemePoint5.classList.add("--active");
  });
  schemePoint5.addEventListener("mouseout", () => {
    schemePoint5.classList.remove("--active");
    schemePoint5.classList.add("--no-active");
    setTimeout(schemePoint5.classList.remove("--no-active"), 1000);
  });
}
openAndClosePoint5();

function openAndClosePoint6() {
  const schemePoint6 = document.querySelector(".scheme__scheme-point.--6");

  schemePoint6.addEventListener("mouseover", () => {
    schemePoint6.classList.add("--active");
  });
  schemePoint6.addEventListener("mouseout", () => {
    schemePoint6.classList.remove("--active");
    schemePoint6.classList.add("--no-active");
    setTimeout(schemePoint6.classList.remove("--no-active"), 1000);
  });
}
openAndClosePoint6();

const scheme = document.getElementById("scheme");
const list = document.getElementById("list");
const schemeBtn = document.getElementById("schemeBtn");
const listBtn = document.getElementById("listBtn");

schemeBtn.addEventListener("click", () => {
  schemeBtn.classList.add("--active");
  listBtn.classList.remove("--active");
  scheme.style.display = "block";
  list.style.display = "none";
});

listBtn.addEventListener("click", () => {
  schemeBtn.classList.remove("--active");
  listBtn.classList.add("--active");
  scheme.style.display = "none";
  list.style.display = "block";
});


document.addEventListener("DOMContentLoaded", () => {
  const casesImagesContainer = document.querySelector(".cases__images");
  const casesPrevBtn = document.getElementById("casesPrevBtn");
  const casesNextBtn = document.getElementById("casesNextBtn");
  const productsBtn = document.getElementById("productsBtn");
  const clientsBtn = document.getElementById("clientsBtn");
  const casesProductsList = document.querySelector(".cases__products");
  const casesClientsList = document.querySelector(".cases__clients");

  const allCasesImages = [];
  for (let i = 1; i <= 96; i++) {
    allCasesImages.push(`images/panels/panel-${i}.png`);
  }

  const clientData = {
    "client-1": [
      "images/clients/client-1.png",
      "images/clients/client-2.png",
      "images/clients/client-3.png",
      "images/clients/client-4.png",
    ],
    "client-2": ["images/clients/client-5.png", "images/clients/client-6.png"],
    "client-3": [
      "images/clients/client-7.png",
      "images/clients/client-8.png",
      "images/clients/client-9.png",
      "images/clients/client-10.png",
    ],
    "client-4": [
      "images/clients/client-11.png",
      "images/clients/client-12.png",
      "images/clients/client-13.png",
      "images/clients/client-14.png",
    ],
    "client-5": [
      "images/clients/client-15.png",
      "images/clients/client-16.png",
      "images/clients/client-17.png",
      "images/clients/client-18.png",
    ],
    "client-6": [
      "images/clients/client-19.png",
      "images/clients/client-20.png",
      "images/clients/client-21.png",
      "images/clients/client-22.png",
    ],
    "client-7": [
      "images/clients/client-23.png",
      "images/clients/client-24.png",
      "images/clients/client-25.png",
      "images/clients/client-26.png",
    ],
    "client-8": [
      "images/clients/client-27.png",
      "images/clients/client-28.png",
      "images/clients/client-29.png",
      "images/clients/client-30.png",
    ],
    "client-9": [
      "images/clients/client-31.png",
      "images/clients/client-32.png",
      "images/clients/client-33.png",
      "images/clients/client-34.png",
    ],
  };

  const imagesPerPageProduct = 4;
  const imagesPerPageClient = 4;
  let currentPage = 0;
  let currentProductStartIndex = 0;
  const imagesPerProduct = 8;

  let currentMode = "products";
  let currentClientId = "client-1";

  function renderCasesImages() {
    casesImagesContainer.innerHTML = "";

    let imagesToUse = [];
    let imagesPerPage = 0;

    if (currentMode === "products") {
      imagesToUse = allCasesImages.slice(
        currentProductStartIndex,
        currentProductStartIndex + imagesPerProduct
      );
      imagesPerPage = imagesPerPageProduct;
      casesPrevBtn.style.display = "flex";
      casesNextBtn.style.display = "flex";
    } else {
      imagesToUse = clientData[currentClientId] || [];
      imagesPerPage = imagesPerPageClient;
      casesPrevBtn.style.display = "none";
      casesNextBtn.style.display = "none";
      currentPage = 0;
    }

    const startIndex = currentPage * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;
    const imagesToShow = imagesToUse.slice(startIndex, endIndex);

    imagesToShow.forEach((imageSrc) => {
      const div = document.createElement("div");
      div.classList.add("cases__image");
      div.style.backgroundImage = `url(${imageSrc})`;
      casesImagesContainer.appendChild(div);
    });

    updateCasesButtons(imagesToUse.length, imagesPerPage);
  }

  function updateCasesButtons(totalImages, imagesPerPage) {
    if (currentMode === "products") {
      casesPrevBtn.disabled = currentPage === 0;
      casesNextBtn.disabled = (currentPage + 1) * imagesPerPage >= totalImages;
    } else {
      casesPrevBtn.disabled = true;
      casesNextBtn.disabled = true;
    }
  }

  casesNextBtn.addEventListener("click", () => {
    let imagesToUse = [];
    let imagesPerPage = 0;

    if (currentMode === "products") {
      imagesToUse = allCasesImages.slice(
        currentProductStartIndex,
        currentProductStartIndex + imagesPerProduct
      );
      imagesPerPage = imagesPerPageProduct;
    } else {
      imagesToUse = clientData[currentClientId] || [];
      imagesPerPage = imagesPerPageClient;
    }

    if ((currentPage + 1) * imagesPerPage < imagesToUse.length) {
      currentPage++;
      renderCasesImages();
    }
  });

  casesPrevBtn.addEventListener("click", () => {
    if (currentPage > 0) {
      currentPage--;
      renderCasesImages();
    }
  });

  const casesProducts = document.querySelectorAll(".cases__product");
  casesProducts.forEach((product) => {
    product.addEventListener("click", (e) => {
      e.preventDefault();

      casesProducts.forEach((p) => p.classList.remove("--active"));
      product.classList.add("--active");

      const productId = product.id;
      const productNumber = parseInt(productId.replace("product-", ""));

      currentProductStartIndex = (productNumber - 1) * imagesPerProduct;
      currentPage = 0;
      renderCasesImages();
    });
  });

  const casesClients = document.querySelectorAll(".cases__client");
  casesClients.forEach((client) => {
    client.addEventListener("click", (e) => {
      e.preventDefault();

      casesClients.forEach((c) => c.classList.remove("--active"));
      client.classList.add("--active");

      currentClientId = client.id;
      currentPage = 0;
      renderCasesImages();
    });
  });

  productsBtn.addEventListener("click", () => {
    productsBtn.classList.add("--active");
    clientsBtn.classList.remove("--active");
    casesProductsList.style.display = "grid";
    casesClientsList.style.display = "none";
    currentMode = "products";
    currentPage = 0;
    currentProductStartIndex = 0;

    // Сброс активного клиента при переключении на "Продукция"
    casesClients.forEach((c) => c.classList.remove("--active"));

    // Установка первого продукта активным при переключении на "Продукция"
    if (casesProducts.length > 0) {
      casesProducts[0].classList.add("--active");
    }
    renderCasesImages();
  });

  clientsBtn.addEventListener("click", () => {
    clientsBtn.classList.add("--active");
    productsBtn.classList.remove("--active");
    casesProductsList.style.display = "none";
    casesClientsList.style.display = "grid";
    currentMode = "clients";
    currentPage = 0;

    // Сброс активного продукта при переключении на "Клиенты"
    casesProducts.forEach((p) => p.classList.remove("--active"));

    // Установка первого клиента активным при переключении на "Клиенты"
    if (casesClients.length > 0) {
      casesClients[0].classList.add("--active");
      currentClientId = casesClients[0].id;
    }
    renderCasesImages();
  });

  // Initial render
  if (casesProducts.length > 0) {
    casesProducts[0].classList.add("--active");
  }
  renderCasesImages();

  // New functionality for scheme__list-item
  const schemeListItems = document.querySelectorAll(".scheme__list-item");

  schemeListItems.forEach((item) => {
    item.addEventListener("click", () => {
      const itemText = item.querySelector(".scheme__item-text").textContent.trim();

      // Switch to products tab if not already active
      if (currentMode !== "products") {
        productsBtn.click(); // Simulate click on products button
      }

      // Find the corresponding cases__product and activate it
      let foundProduct = null;
      casesProducts.forEach((product) => {
        const productText = product.querySelector(".cases__product-conteiner").textContent.trim();
        if (productText === itemText) {
          foundProduct = product;
        }
      });

      if (foundProduct) {
        casesProducts.forEach((p) => p.classList.remove("--active"));
        foundProduct.classList.add("--active");

        const productId = foundProduct.id;
        const productNumber = parseInt(productId.replace("product-", ""));

        currentProductStartIndex = (productNumber - 1) * imagesPerProduct;
        currentPage = 0;
        renderCasesImages();
        scrollToProducts(); // Scroll to the cases section
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const feedbackForm = document.getElementById('feedback');
  const feedbackInputName = document.getElementById('feedbackInputName');
  const feedbackInputPhone = document.getElementById('feedbackInputPhone');

  feedbackForm.addEventListener('submit', (event) => {
    if (feedbackForm.checkValidity()) {
      feedbackInputName.value = '';
      feedbackInputPhone.value = '';
      alert('Ваша заявка успешно отправлена!');
    }
    event.preventDefault();
  });
});
