const itens = document.querySelectorAll(".item");

itens.forEach(function(item) {
    item.addEventListener("click", function () {
        const itemAberto = document.querySelector(".aberto");

        if (itemAberto) {
            itemAberto.classList.remove("aberto");
        } else {
            item.classList.add("aberto");
        }
    })
});
