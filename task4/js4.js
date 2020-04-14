const arr = [
    { value: 100, type: "USD" },
    { value: 215, type: "EUR" },
    { value: 7, type: "EUR" },
    { value: 99, type: "USD" },
    { value: 354, type: "USD" },
    { value: 12, type: "EUR" },
    { value: 77, type: "USD" },
];

let sum = [];
let arrEur = [];


    sum = arr.filter(function (e) {
        if(e.type == "USD"){
            return e.value <100;
        }
       
    })
    

    arrEur = arr.filter(function (e) {
        return e.type == "EUR";
    })
    let result =0;
    sum.forEach(function(item){
        result += item.value;
    });



document.write(`<p>Сума всіх значень value з типом USD: ${result}<hr>`);

document.write(`Масив об'єктів EUR:<br/>`);
arrEur.forEach(function(item){
    document.write(`value: ${item.value*2} || type: ${item.type} <br/>`);
})


