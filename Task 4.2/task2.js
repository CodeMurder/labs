


window.addEventListener("load", function () {
    const button = document.getElementById("add_tr");
    const table = document.getElementById('table');
    const delete_tr = document.getElementsByClassName("delete_tr");
    const diagrama = document.getElementById("diagrama");
    const block_for_diagrama = document.getElementsByClassName("block_for_diagrama");

    button.addEventListener('click', function () {
        const obl = prompt("Область");
        const amount = prompt("Кількість ДТП");

        const tr = document.createElement('tr');
        table.appendChild(tr);
        tr.classList.add("tr");
        

        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");

        tr.appendChild(td1);
        td1.classList.add("td");
        td1.innerHTML = "<button class='delete_tr'>Видалити</button>";

        tr.appendChild(td2);
        td2.classList.add("td");
        td2.innerHTML = obl;

        tr.appendChild(td3);
        td3.classList.add("td");
        td3.innerHTML = amount;

        const block = document.createElement("div");
        diagrama.appendChild(block);
        block.classList.add("block_for_diagrama");
        block.style.height = amount/10 + "px";
        block.setAttribute("title", amount + " ДТП");

        const p = document.createElement("p");
        block.appendChild(p);
        p.innerText = obl;
        p.classList.add("rotate");

        for (let i = 0; i < delete_tr.length; i++) {
            delete_tr[i].addEventListener("click", function () {
                let row = delete_tr[i].parentNode.parentNode;
                row.parentNode.removeChild(row);
                diagrama.removeChild(block_for_diagrama[i]);
            })
        }
        
    })

    for (let i = 0; i < delete_tr.length; i++) {
        delete_tr[i].addEventListener("click", function () {
            let row = delete_tr[i].parentNode.parentNode;
            row.parentNode.removeChild(row);
            diagrama.removeChild(block_for_diagrama[i]);
        })
    }

})