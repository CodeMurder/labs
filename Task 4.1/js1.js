window.addEventListener("load", function () {
    const photo = document.getElementById("photo");
    photo.imgwidth.onchange = sizeOnChange;
    photo.imgheight.onchange = sizeOnChange;
    photo.borderweight.onchange = borderWeightOnChange;
    photo.bordercolor.onchange = borderColorOnChange;
    photo.imgalttext.onchange = alttextOnChange;

    photo.addEventListener('submit', event => {
        event.preventDefault()
        let img = document.getElementById("imagetochange");
        img.style.width = photo.imgwidth.value + "px";
        img.style.height = photo.imgheight.value + "px";
        img.style.border = photo.borderweight.value + "px solid red";
        img.style.borderColor = photo.bordercolor.value;
        img.alt = photo.imgalttext.value;
    })

    function validate(elem, pattern) { // фунция валидации по регулярке
        var res = elem.value.search(pattern);
        if (res == -1) {
            elem.value = "";
            elem.className = "invalid";
        } else {
            elem.className = "valid";
        }
    }

    function sizeOnChange() {
        var pattern = /[0-9]{1,4}/;
        validate(this, pattern);
    }

    function borderWeightOnChange() {
        var pattern = /[0-9]{1,2}/;
        validate(this, pattern);
    }

    function alttextOnChange() {
        var pattern = /[A-Za-z]{1,20}/;
        validate(this, pattern);
    }

    function borderColorOnChange() {
        var pattern = /[a-z]{1,15}/;
        validate(this, pattern);
    }
})