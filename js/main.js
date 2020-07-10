window.onload = function () {

    //const addItem = document.getElementById("addItem");

    // BOUTON CLIQUÉ
    const button = event.target;

    //COLONNE DE DROITE
    const selection = document.getElementById("selection");

    //const nourriture = document.getElementById("addItem").previousElementSibling.innerHTML;
    //const nourriture = document.getElementsByClassName("addItem")[0].previousElementSibling.innerHTML;




    button.addEventListener("click", function () {
        const nourriture = $(event.target.previousElementSibling).text();
        console.log(nourriture)
        //selection.innerHTML += "<p>" + nourriture + "</p>";

        if (nourriture == selection) {
            selection.innerHTML += "<p>" + "2x" + $(event.target.previousElementSibling).text() + "</p>";
            return;
        } else
            // AFFICHER LE PRODUIT DANS LA COLONNE DE DROITE
            selection.innerHTML += "<p>" + $(event.target.previousElementSibling).text() + "</p>";



    });


}