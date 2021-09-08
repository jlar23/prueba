const $portfolio = document.querySelector(".sec-portafolio-js");
const $modal = document.querySelector(".modal-img-js")

$portfolio.addEventListener('click', (e) => {
    if (e.target.classList.contains("img-btn-modal-js")) {
        //SRC
           let UrlImg = e.target.attributes[0].nodeValue
        //modal
        $modal.src = UrlImg
    }
})