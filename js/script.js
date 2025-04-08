// Seleziona l'elemento HTML con id "photo-container" che conterrà le card delle foto
let photoContainer = document.getElementById("photo-container");
// Seleziona l'elemento HTML con id "overlay" che mostrerà l'immagine ingrandita
let overlay = document.getElementById("overlay");
// Seleziona il pulsante di chiusura dell'overlay
let overlayButton = document.getElementById("close-overlay");
// Seleziona l'elemento immagine nell'overlay che mostrerà l'immagine ingrandita
let clickImage = document.getElementById("click-image");

// Definisce una funzione che aggiunge event listener alle immagini con classe "clickable-image"
function addClickListenersToImages() {
    // Seleziona tutte le immagini con classe "clickable-image"
    document.querySelectorAll(".clickable-image").forEach(img => {
        // Aggiunge un event listener per il click a ciascuna immagine
        img.addEventListener("click", () => {
            // Imposta la src dell'immagine nell'overlay uguale alla src dell'immagine cliccata
            clickImage.src = img.dataset.src;
            // Aggiunge la classe "img-fluid" all'immagine nell'overlay per renderla responsive
            clickImage.classList.add("img-fluid");
            // Mostra l'overlay impostando display: flex
            overlay.classList.add("d-flex");
        });
    });
}

// Effettua una richiesta AJAX per ottenere i dati delle foto dall'API
axios.get('https://lanciweb.github.io/demo/api/pictures/').then((resp) => {
    // Stampa i dati ricevuti nella console per debug
    console.log(resp.data);
    // Salva l'array di foto in una variabile locale
    const photos = resp.data;
    // Itera su ogni foto nell'array
    for (let i = 0; i < photos.length; i++) {
        // Crea una stringa HTML per la card della foto corrente
        let photoCard = `<div class="col-lg-4 col-md-6 col-sm-12 ">
                            <div class="card mt-4"> 
                                <div class="card-body">
                                    <!-- Immagine della foto con classe clickable-image e attributo data-src per memorizzare l'URL -->
                                    <img src="${photos[i].url}" alt="" class="img-fluid mb-4 clickable-image" data-src="${photos[i].url}">
                                    <div class="card-info">
                                        <!-- Data della foto -->
                                        <p class="card-text text-secondary">${photos[i].date}</p>
                                        <!-- Titolo della foto -->
                                        <h5 class="card-title"><b>${photos[i].title}</b></h5>
                                    </div>
                                    <!-- Immagine del pin decorativo -->
                                    <img src="./img/pin.svg" alt="pin" class="pin">
                                </div>
                            </div>
                        </div>`;
        // Aggiunge la card HTML al container delle foto
        photoContainer.innerHTML += photoCard;
    }
    
    // Chiama la funzione per aggiungere gli event listener dopo aver generato tutte le immagini
    addClickListenersToImages();
});

// Aggiunge un event listener al pulsante di chiusura dell'overlay
overlayButton.addEventListener("click", () => {
    // Nasconde l'overlay impostando display: none quando il pulsante viene cliccato
    overlay.classList.remove("d-flex");
});
