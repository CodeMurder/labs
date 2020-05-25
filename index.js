let loader = document.getElementById("loadButton");
let xhttp = new XMLHttpRequest();

loader.addEventListener("click", load_photo);
window.addEventListener("scroll", () => {
    
    if (
        document.documentElement.clientHeight + pageYOffset >=
        document.body.offsetHeight
    ) {
        load_photo();
    }
});

function load_photo() {
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            try {
                removePreloader();
                let data = JSON.parse(xhttp.responseText);
                console.log(data);
                for (let i = 0; i < data.results.length; i++) {
                    let img = document.createElement("img");
                    document.body.appendChild(img);
                    img.setAttribute("src", data.results[i].picture.large);
                    img.style.width = "15vw";
                    img.style.height = "15vw";
                    img.style.marginLeft = "4vw";
                    img.style.marginBottom = "3vw";
                }
            } catch (err) {
                document.write(err.message + " in " + xhttp.responseText);
            }
        } else {
            addPreloader();
        }
    };
    new Promise(function(resolve, reject) {
        sendRequest();
        resolve();
      });
    

    
}

function sendRequest(){
    xhttp.open("GET", "https://randomuser.me/api/?results=25", true);
    xhttp.send(null);
}

function addPreloader() {
    
    if (!document.querySelector(".preloader-container")) {
        let preloaderHTML = '<div class="preloader-container"><img src="https://flevix.com/wp-content/uploads/2020/01/Bounce-Bar-Preloader-1.gif" /></div>';
        document.querySelector("body").innerHTML += preloaderHTML;
    }
}

function removePreloader() {
   
    let preloader = document.querySelector(".preloader-container");
   
    if (preloader) {
        preloader.remove();
    }
}