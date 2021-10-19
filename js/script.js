
//CREARE LA VARIABILE DEL NUMERO DI CELLE
//DA INSERIRE A RIGA 96 102 E 103


const selectDifficolta = document.getElementById("livello");
console.log("questo è il select " + selectDifficolta);



//DICHIARARE IL CONTAINER GENERALE
const containerUniversale = document.querySelector(".container");

//DICHIARARE IL BOTTONE PLAY
const btnPlay = document.getElementById("btn_play");

/**  
 *   funzione che determina la larghezza/altezza di un box
 * * @param x=lato del quadrato(box)
 * * @param y=numero di celle
 * */
function sizeBox(y) {
    return y / Math.sqrt(y);

}
console.log(sizeBox(49));

/* ------------------------------------------------------------ */
function generazioneGriglia(nBox) {

    //CREARE IL DIV DELLA GRIGLIA
    const grillContainer = document.createElement("div");
    console.log(grillContainer);

    //DARE GLI STILI ALLLA GRIGLIA
    grillContainer.classList.toggle("grill_container");

    //INSERIRE LA GRIGLIA NEL CONTAINER UNIVERSALE
    containerUniversale.append(grillContainer);



    //CREARE UNA CELLA DENTRO LA GRIGLIA
    for (i = 0; i < nBox; i++) {

        const box = document.createElement("div");

        //DARE GLI STILI ALLA CELLA DELLA GRIGLIA
        box.classList.toggle("box");
        box.style.height = "calc(100% / " + sizeBox(nBox);
        box.style.width = "calc(100% / " + sizeBox(nBox);
        //INSERIRE LA CELLA NELLA GRIGLIA
        grillContainer.append(box);

        //INSERIRE IN NUMERI DENTRO OGNI BOX
        box.textContent = i + 1;

        //QUANDO SCHIACCIO UN BOTTONE QUESTO DEVE CAMBIARE COLORE
        box.addEventListener("click", function () {
            this.classList.toggle("box_on");
        });
    }
}
//------------------------------------------------------------
//QUANDO SCHIACCIO IL BOTTONE PLAY DEVO:
btnPlay.addEventListener("click", function () {


    //CAPIRE CHE LIVELLO DI DIFFICOLTA' HO SCELTO
    const difficolta = selectDifficolta.value;
    console.log(difficolta);

    switch (difficolta) {
        case "1":
            generazioneGriglia(100);
            break;
        case "2":
            generazioneGriglia(81);
            break;
        case "3":
            generazioneGriglia(49);
            break;
    }



});


