let photoContainer = document.getElementById("photo-container");

axios.get('https://lanciweb.github.io/demo/api/pictures/').then((resp) => {
    console.log(resp.data);
});