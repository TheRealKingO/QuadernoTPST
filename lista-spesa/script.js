// TODO:
// 1. Al click su "Aggiungi" (o premendo Invio) aggiungi un elemento alla lista
//    con il testo inserito nell'input.
// 2. Ogni elemento deve avere un bottone "Rimuovi" che lo elimina dalla lista.
// 3. Se l'input è vuoto, mostra un messaggio di errore e non aggiungere nulla.
// 4. (Bonus) Al click sul testo dell'elemento, barralo come "fatto".

const input=document.getElementById("item");
const btnAggiungi=document.getElementById("btn-aggiungi");
const lista=document.getElementById("lista");

btnAggiungi.addEventListener("click", aggiungiItem);

function aggiungiItem(){
    const  testo=input.value;
    //testo potrebbe essere buoto
    if(testo=== ""){
        return;
    }
    //il testo non deve essere già presente nella lista
    for(const item of lista.children){
        const testoItem=item.firstChild.textContent;

        if(testoItem===testo){
            //messaggio di errore
            return;
        }
    }
    const nuovoItem=document.createElement("li");

    const spanTesto=document.createElement("span");
    spanTesto.textContent=testo;
    nuovoItem.append(spanTesto);
    //per barrare le cose fatte
    spanTesto.addEventListener("click", () => {
        nuovoItem.classList.toggle("done");//come fare l'if
        /*if 
        (nuovoItem.classList.contains("done")){
            nuovoItem.classList.remove("done");
        }else{
            nuovoItem.classList.add("done"); //aggiungiamo la classe "done"
        }
            */
    });

    const btnRimuovi=document.createElement("button");
    btnRimuovi.textContent="🗑️";
    btnRimuovi.addEventListener("click", () => {
        nuovoItem.remove();
    });
    nuovoItem.append(btnRimuovi);

    lista.appendChild(nuovoItem);
}



