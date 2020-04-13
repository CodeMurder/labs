var bottleAmount = prompt("Введіть к-сть пляшок.");
parseInt(bottleAmount);

for (var i = bottleAmount - 1; i >= 0; --i) {
    if (i === 0) {
        document.write("0 пляшок!");
        continue;
    }
    document.write("<p>" + i + " пляшок стоїть на стіні, одна упала і залишилось" + "</p>");
}