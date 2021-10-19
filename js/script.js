



const selectDifficolta = document.getElementById("livello");
console.log("questo è il select " + selectDifficolta);







//DICHIARARE IL CONTAINER GENERALE
const containerUniversale = document.querySelector(".container");

//DICHIARARE IL BOTTONE PLAY
const btnPlay = document.getElementById("btn_play");

//QUANDO SCHIACCIO IL BOTTONE PLAY DEVO:
btnPlay.addEventListener("click", function () {




    //CAPIRE CHE LIVELLO DI DIIFICOLTA' HO SCELTO
    const difficolta = selectDifficolta.value;
    console.log(difficolta);


    //CREARE IL DIV DELLA GRIGLIA
    const grillContainer = document.createElement("div");
    console.log(grillContainer);

    //DARE GLI STILI ALLLA GRIGLIA
    grillContainer.classList.toggle("grill_container");

    //INSERIRE LA GRIGLIA NEL CONTAINER UNIVERSALE
    containerUniversale.append(grillContainer);



    //CREARE UNA CELLA DENTRO LA GRIGLIA
    for (i = 0; i < 100; i++) {

        const box = document.createElement("div");

        //DARE GLI STILI ALLA CELLA DELLA GRIGLIA
        box.classList.toggle("box");

        //INSERIRE LA CELLA NELLA GRIGLIA
        grillContainer.append(box);

        //QUANDO SCHIACCIO UN BOTTONE QUESTO DEVE CAMBIARE COLORE
        box.addEventListener("click", function () {
            this.classList.toggle("box_on");
        });
    }






});


