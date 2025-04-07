let photoContainer = document.getElementById("photo-container");
let overlay = document.getElementById("overlay");
let overlayButton = document.getElementById("close-overlay");

axios.get('https://lanciweb.github.io/demo/api/pictures/').then((resp) => {
    console.log(resp.data);
    const photos = resp.data;
    for (let i = 0; i < photos.length; i++) {
        let photoCard = `<div class="col-lg-4 col-md-6 col-sm-12 ">
                            <div class="card mt-5"> 
                                <div class="card-body">
                                    <img src="${photos[i].url}" alt="" class="img-fluid mb-4">
                                    <div class="card-info">
                                        <p class="card-text text-secondary">${photos[i].date}</p>
                                        <h5 class="card-title"><b>${photos[i].title}</b></h5>
                                    </div>
                                    <img src="./img/pin.svg" alt="pin" class="pin">
                                </div>
                            </div>
                        </div>`;
        photoContainer.innerHTML += photoCard;
    }
});

overlayButton.addEventListener("click", () => {
    overlay.classList.add("d-none");
});