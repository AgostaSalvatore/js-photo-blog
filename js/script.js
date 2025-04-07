let photoContainer = document.getElementById("photo-container");

axios.get('https://lanciweb.github.io/demo/api/pictures/').then((resp) => {
    console.log(resp.data);
    const photos = resp.data;
    for (let i = 0; i < photos.length; i++) {
        let photoCard = `<div class="col-lg-4 col-md-6 col-sm-12 ">
                            <div class="card mt-5"> 
                                <div class="card-body">
                                    <img src="${photos[i].url}" alt="" class="img-fluid">
                                    <h5 class="card-title">${photos[i].title}</h5>
                                    <p class="card-text">${photos[i].date}</p>
                                    <img src="./img/pin.svg" alt="pin" class="pin">
                                </div>
                            </div>
                        </div>`;
        photoContainer.innerHTML += photoCard;
    }
});