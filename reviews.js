// [
//   {
//     _id: 1,
//     author: "Natalia",
//     avatar_url: "https://ftp.goit.study/img/avatars/4.jpg",
//     review:
//       "Work with was extraordinary! He turned out to be a very competent and responsible specialist. The projects were completed on time and the result exceeded my expectations.",
//   },
// ];
// https://portfolio-js.b.goit.study/api/reviews
// const BASE_URL = "https://portfolio-js.b.goit.study/api";
// const ENDPOINT = "reviews";

// function getReviews() {
//   return axios
//     .get("https://portfolio-js.b.goit.study/api/reviews")
//     .then(({ data }) => data);
// }

// // const listReviews = document.querySelector(".reviews-list");

// getReviews().then((data) => createReviews(data));

// function createReviews(cardReviews) {
//   const markup = cardReviews
//     .map(
//       ({
//         _id,
//         author,
//         avatar_url,
//         review,
//       }) => `<li class="reviews-item" id=${_id}>
//             <img src="${avatar_url}" alt="foto" />
//             <h3 class="reviews-subtitle>${author}</h3>
//          <p class="reviews-text">${review}</p>
//           </li>`
//     )
//     .join("");
//   listReviews.insertAdjacentHTML("beforeend", markup);
// }
// function getReviews() {
//   return fetch("https://portfolio-js.b.goit.study/api/reviews").then(
//     (response) => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     }
//   );
// }
// console.log(getReviews());
// const listReviews = document.querySelector(".reviews-list");

// function createReviews(cardReviews) {
//   const swiperWrapper = document.querySelector(".swiper-wrapper");
//   const markup = cardReviews
//     .map(
//       ({
//         _id,
//         author,
//         avatar_url,
//         review,
//       }) => `<li class="reviews-item swiper-slide" id=${_id}>
//             <img class="reviews-img" src="${avatar_url}" alt="foto" />
//             <h3 class="reviews-subtitle">${author}</h3>
//          <p class="reviews-text">${review}</p>
//           </li>`
//     )
//   <div class="swiper-slide" id=${_id}>
//         <img class="reviews-img" src="${avatar_url}" alt="foto" />
//         <h3 class="reviews-subtitle">${author}</h3>
//      <p class="reviews-text">${review}</p>
//       </div>`
//     .join("");
//   swiperWrapper.insertAdjacentHTML("beforeend", markup);
// }
// getReviews().then((data) => {
//   if (data.length === 0) {
//     listReviews.innerHTML = "<p>Not found</p>";
//   } else {
//     createReviews(data);
//     const swiper = new Swiper(".swiper-container", {
//       slidesPerView: "auto",
//       spaceBetween: 40,
//       breakpoints: {
//         // when window width is >= 320px
//         320: {
//           slidesPerView: 1,
//           spaceBetween: 20,
//         },
//         // when window width is >= 480px
//         768: {
//           slidesPerView: 2,
//           spaceBetween: 30,
//         },
//         // when window width is >= 640px
//         1440: {
//           slidesPerView: 5,
//           spaceBetween: 40,
//         },
//       },
//       navigation: {
//         nextEl: ".btn-right",
//         prevEl: ".btn-left",
//       },
//       //   pagination: {
//       //     el: '.swiper-pagination',
//       //     clickable: true,
//       //   },
//       keyboard: {
//         enabled: true,
//         onlyInViewport: true,
//       },
//       mousewheel: true,
//     });
//     // swiper.slideNext();
//   }
// });
// Инициализация Swiper
const swiperWrapper = document.querySelector(".swiper-wrapper");

async function getReviews() {
  try {
    const response = await axios.get(
      "https://portfolio-js.b.goit.study/api/reviews"
    );
    return response.data;
  } catch (error) {
    console.error("Ошибка при получении отзывов:", error);
    return [];
  }
}
async function initReviews() {
  const data = await getReviews();
  if (data.length === 0) {
    swiperWrapper.innerHTML = "<p>Not found</p>";
  } else {
    createReviews(data);
    initializeSwiper();
  }
}
function createReviews(cardReviews) {
  //   const swiperWrapper = document.querySelector('.swiper-wrapper');
  const markup = cardReviews
    .map(
      ({ _id, author, avatar_url, review }) => `
      <div class="reviews-item swiper-slide" id="${_id}">
        <img class="reviews-img" src="${avatar_url}" alt="foto" />
        <h3 class="reviews-subtitle">${author}</h3>
        <p class="reviews-text">${review}</p>
      </div>`
    )
    .join("");
  swiperWrapper.insertAdjacentHTML("beforeend", markup);
}

function initializeSwiper() {
  new Swiper(".swiper-container", {
    slidesPerView: 1,
    spaceBetween: 16,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1440: {
        slidesPerView: 5,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    mousewheel: true,
  });
}

initReviews();
