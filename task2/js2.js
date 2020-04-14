function triangleCreation() {
    let arr = [];

    let size = 6;

    document.write('<p>');
    for (let i = 1; i <= size; i++) {
        arr[i] = 0;
    }

    arr[0] = 1;
    for (let j = 1; j <= size; j++) {
        for (let i = j; i >= 1; i--) {
            document.write(`\n<b>${arr[i - 1]}</b>`);
            arr[i] = arr[i - 1] + arr[i];
        }
        document.write('<p>');

    }
    arr.forEach(function(item){
        document.write(` <b> ${item} </b>`);
    })
   

}

triangleCreation();