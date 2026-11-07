// Recupero il pulsante e gli elementi HTML
const btnCalcola = document.getElementById("btn-calcola");

const soluzione1 = document.getElementById("soluzione1");
const soluzione2 = document.getElementById("soluzione2");

// Quando clicco sul pulsante
btnCalcola.addEventListener("click", function() {

    // Leggo i valori degli input
    const a = Number(document.getElementById("a").value);
    const b = Number(document.getElementById("b").value);
    const c = Number(document.getElementById("c").value);

    // Controllo che i valori siano numeri validi
    if (
        document.getElementById("a").value === "" ||
        document.getElementById("b").value === "" ||
        document.getElementById("c").value === ""
    ) {
        soluzione1.textContent = "Inserisci tutti i valori!";
        soluzione2.textContent = "";
        return;
    }

    // Controllo che a, b e c siano numeri
    if (!Number.isFinite(a) || !Number.isFinite(b) || !Number.isFinite(c)) {
        soluzione1.textContent = "Inserisci valori validi!";
        soluzione2.textContent = "";
        return;
    }

    // Controllo che a sia diverso da zero
    if (a === 0) {
        soluzione1.textContent = "Errore: a non può essere zero!";
        soluzione2.textContent = "";
        return;
    }

    // Calcolo il discriminante
    const delta = b * b - 4 * a * c;

    // Se delta è maggiore di zero: due soluzioni
    if (delta > 0) {

        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);

        soluzione1.textContent = "x1 = " + x1;
        soluzione2.textContent = "x2 = " + x2;

    }

    // Se delta è uguale a zero: soluzione doppia
    else if (delta === 0) {

        const x = -b / (2 * a);

        soluzione1.textContent = "x1 = x2 = " + x;
        soluzione2.textContent = "";

    }

    // Se delta è minore di zero: nessuna soluzione reale
    else {

        soluzione1.textContent = "Nessuna soluzione reale.";
        soluzione2.textContent = "";

    }

});