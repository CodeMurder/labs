let bottleAmount = prompt("Введіть к-сть пляшок.");
parseInt(bottleAmount);

for (let i = bottleAmount; i >= 0; --i) {
    if (!i) {
        document.write("0 пляшок!");
        continue;
    }
    document.write(`<p> ${i} пляшок стоїть на стіні, одна упала і залишилось ${i-1}</p>`);
}