window.onload = function () {

    //const addItem = document.getElementById("addItem");

    // BOUTON CLIQUÉ
    const button = event.target;

    //COLONNE DE DROITE
    const selection = document.getElementById("selection");
 const selectedfood = document.querySelectorAll(".selectedfood")
    //const nourriture = document.getElementById("addItem").previousElementSibling.innerHTML;
    //const nourriture = document.getElementsByClassName("addItem")[0].previousElementSibling.innerHTML;


    let i = 1;

    button.addEventListener("click", function () {

       
        console.log(selectedfood.length);

        const nourriture = $(event.target.previousElementSibling).text();
        //console.log(nourriture)
        //console.log(selection.innerText);
        //selection.innerHTML += "<p>" + nourriture + "</p>";
        if (selection.innerHTML.indexOf(nourriture) !== -1) {
            selection.innerHTML += "<p class=\"selectedfood \">" + i + "x" + $(event.target.previousElementSibling).text() + "</p>";
            i++;
        } else
            // AFFICHER LE PRODUIT DANS LA COLONNE DE DROITE
            selection.innerHTML += "<p>" + $(event.target.previousElementSibling).text() + "</p>";
        i++;




    });


}