var arr = [
	{value: 100, type: "USD"},
	{value: 215, type: "EUR"},
	{value: 7, type: "EUR"},	
	{value: 99, type: "USD"},
	{value: 354, type: "USD"},
	{value: 12, type: "EUR"},
	{value: 77, type: "USD"},
];

var sum = 0;
var arrEur = [];

for(var i = 0; i < arr.length; ++i) {
    if (arr[i].value < 100 && arr[i].type == "USD") {
        sum += arr[i].value;
    }
}

for(var i = 0; i < arr.length; ++i) {
    if (arr[i].type == "EUR") {
        arr[i].value = arr[i].value * 2;
        arrEur.push(arr[i]);
    }
}


document.write("<p>Сума всіх значень value з типом USD: " + sum + "<hr>");

document.write("Масив об'єктів EUR:<br/>");
for(var i = 0; i < arrEur.length; ++i) {
    document.write("value: " + arrEur[i].value + " || type: " + arrEur[i].type + "<br/>");
}

