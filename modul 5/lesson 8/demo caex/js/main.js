const navBtn = document.querySelector("#nav__btn");
const menuEl = document.querySelector("#menu");
const logoEl = document.querySelector("#logo");
const heroContent = document.querySelector(".hero__content");
const heroShape = document.querySelector(".hero__shape");

document.querySelector("#dropdownBtn").addEventListener("click", () => {
  document.querySelector(".dropdown-menu").classList.toggle("visiable");
});

function toggleInput(input) {
  input.type = "date";
  input.showPicker();
}

navBtn.addEventListener("click", function () {
  if (menuEl.classList.contains("open")) {
    document.body.style.overflow = "auto";
    this.innerHTML = `<img src="https://caexuzbekistan.com/assets/images/icon_bars.svg" alt="menu"></img>`;
    logoEl.innerHTML = `<img src="https://caexuzbekistan.com/assets/images/logo__dark.svg" alt="CAEx Uzbekistan logo" width="328"/>`;
    menuEl.classList.remove("open");
    if (heroContent && heroShape) {
      heroShape.style.zIndex = "1";
      heroContent.classList.remove("moveToBottom");
    }
  } else {
    document.body.style.overflow = "hidden";
    menuEl.classList.toggle("open");
    logoEl.innerHTML = `<img src="https://caexuzbekistan.com/assets/images/logo__light.svg" alt="CAEx Uzbekistan logo" width="328"/>`;
    if (heroContent && heroShape) {
      heroContent.classList.add("moveToBottom");
      heroShape.style.zIndex = "-1";
    }
    this.innerHTML = `<img src="https://caexuzbekistan.com/assets/images/icon_exit.svg" alt="exit"></img>`;
  }
});

if (window.location.pathname !== "/") {
  document.querySelector(".header").classList.add("static__header");
}

if (window.innerWidth < 767) {
  try {
    if (window.location.pathname === "/events" && window.innerWidth < 767) {
      document.querySelector(".header").style.background = "#fff";
    }

    const inputAtDate = document.querySelector("#inputAtDate");
    const inputToDate = document.querySelector("#inputToDate");

    inputAtDate.onblur = null;
    inputToDate.onblur = null;

    inputAtDate.type = "date";
    inputAtDate.value = new Date().toISOString().split("T")[0];
    inputToDate.type = "date";
    inputToDate.value = new Date().toISOString().split("T")[0];
  } catch (err) {
    console.log(err);
  }

  document.querySelector(".header").classList.add("static__header");
}

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".event__btn");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.getAttribute("data-target");
      const targetElement = document.getElementById(target);

      // Hide all divs
      document.querySelectorAll(".targetForm").forEach((div) => {
        div.style.display = "none";
      });

      // Display the targeted div
      document.getElementById(target).style.display = "block";

      // Remove 'active' class from all buttons
      buttons.forEach((btn) => {
        btn.classList.remove("active");
      });

      // Add 'active' class to the clicked button
      button.classList.add("active");

      // Scroll to the target element
      targetElement.scrollIntoView({ behavior: "smooth" });
    });
  });

  AOS.init({
    duration: 1500,
  });
});

const lastEventSwiper = new Swiper(".lastEventSwiper", {
  direction: "vertical",
  noSwiping: true,
  noSwipingClass: "swiper-slide",
  autoplay: true,
  loop: true,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
});

const floorSwiper = new Swiper(".floorSwiper", {
  loop: true,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
});

const calendarAt = document.querySelectorAll(".calendar-at");
const labelArrow = document.querySelectorAll(`.label-arrow`);
calendarAt.forEach((val, id) => {
  val.addEventListener("focus", () => {
    labelArrow[id].style.display = "none";
  });
  val.addEventListener("blur", () => {
    labelArrow[id].style.display = "block";
  });
});

//* Swiper
const complexSwiper = new Swiper(".photo_complex-Swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".next-btn",
    prevEl: ".prev-btn",
  },
});
// *End of Swiper

try {
  // Plan complex
  // Etaj elemnt
  const etajList = document.querySelectorAll(".map_complex-control-list-item");
  const complex_mapImage = [
    "https://caexuzbekistan.com/assets/images/1-этаж.jpeg",
    "https://caexuzbekistan.com/assets/images/2-этаж.jpeg",
    "https://caexuzbekistan.com/uploads/files/2024-01-07/cKF88bcauQJjVpsqFOouJyXjNMrD9YzMDmH1QeiY.jpg",
  ];

  // Image zoom element
  const imageZoomEl = document.querySelectorAll(".map_complex-images");

  // Plus, minus zoom image
  const plusZoom = document.querySelector(".plusZoom");
  const minusZoom = document.querySelector(".minusZoom");

  // // fullscreen-btn element
  const fullscreenButton = document.querySelector(".fullscreen-btn");
  const closefullscreenBtn = document.querySelector(".close-fullscreen");
  const fullscreenWrapper = document.querySelector(
    ".map_complex-image-fullscreen"
  );

  // Image
  const image = document.querySelectorAll(".map_complex-images img");

  //* Image zoom
  let x, y, width, height;
  imageZoomEl.forEach((elem) => {
    elem.onmouseenter = () => {
      const size = elem.getBoundingClientRect();

      x = size.x;
      y = size.y;
      width = size.width;
      height = size.height;
    };

    elem.onmousemove = (e) => {
      const horizoltal = ((e.clientX - x) / width) * 100;
      const vertical = ((e.clientY - y) / height) * 100;

      elem.style.setProperty("--x", horizoltal + "%");
      elem.style.setProperty("--y", vertical + "%");
    };
  });

  // * Image zoom End of

  //! click zoom image

  let zoomCount = 1;

  plusZoom.addEventListener("click", () => {
    if (zoomCount < 10) {
      zoomCount++;
      image.forEach((elem) => {
        elem.style.transform = `scale(${zoomCount})`;
      });
    }
  });

  minusZoom.addEventListener("click", () => {
    if (zoomCount > 1) {
      zoomCount--;
      image.forEach((elem) => {
        elem.style.transform = `scale(${zoomCount})`;
      });
    }
  });

  // ***************************

  etajList.forEach((elem, index) => {
    elem.addEventListener("click", () => {
      // scrool behavior for complex map images
      // imageZoomEl.forEach(elem => {
      //   elem.scrollIntoView({ behavior: "smooth" });
      // });

      image.forEach((elem) => {
        // Image replace
        elem.src = complex_mapImage[index];

        //? zoom cliking
        //   zoomCount = 1;
        //   elem.style.transform = `scale(${zoomCount})`;
      });

      // Remove active class
      etajList.forEach((elem) => {
        elem.classList.remove("map_complex-active");
      });

      // Add active class click etajList
      elem.classList.add("map_complex-active");
    });
  });

  // Fullscreen
  fullscreenButton.addEventListener("click", () => {
    imageZoomEl.forEach((elem) => {
      elem.scrollIntoView({ behavior: "smooth" });
    });

    fullscreenWrapper.classList.add("fullscreen-active");
  });

  closefullscreenBtn.addEventListener("click", () => {
    fullscreenWrapper.classList.remove("fullscreen-active");
  });
} catch (error) {
  console.log(error.message);
}
