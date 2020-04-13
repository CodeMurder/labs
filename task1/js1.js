

////////////////////////////////////////////////////////////////////////////////////
var ChoosenName;
alert("Добрий день! Давайте зіграємо з Вами у гру.");

function genderChoose() {
    var gender = prompt("Ваша стать. (1 — чоловіча, 2 — жіноча)");
    switch (gender) {
        case '1':
            var name = prompt("Оберіть ім'я для Вашої потенційної майбутньої дружини");
            ChoosenName = name;
            break;
        case '2':
            name = prompt("Оберіть ім'я для Вашого потенційного чоловіка");
            ChoosenName = name;
            break;
        default:
            alert("Вибачте, наша програма поки що не знає таких статей. :( Оберіть з вказаного");
            return genderChoose();
    }
}
genderChoose();
var childrenChoose = prompt("Вкажіть, скількох дітей Ви б хотіли мати. :)");


var professionChoose = prompt("Ким би Ви хотіли працювати?");


var countryOption = prompt("У якій країні Ви б хотіли жити та працювати?");


alert("Отже, ваше майбутнє може бути таким: ");


alert("Ви укладете шлюб з " + ChoosenName + " та у Вас буде " + childrenChoose + " дітей.");


alert("Ви переїдете до " + countryOption + ", щоб працювати там " + professionChoose + ".");