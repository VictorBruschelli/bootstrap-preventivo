// Evita il refresh della pagina (che dia errore quando clicco nel bottone)
document.getElementById('preventivoForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // creo una condizione che Controlla se l'utente ha accettato la Privacy Policy
    if (!document.getElementById('privacyPolicy').checked) {
        alert("Devi accettare la Privacy Policy per calcolare il preventivo.");
        return; 
    }
    
    //dichiaro le ore di lavoro e creo un oggetto per definire il valore di ogni lavoro
    const oreDiLavoro = 10;
    const prezziOrari = {
        'backend': 20.50,
        'frontend': 15.30,
        'analisi': 33.60
    };

    // manipolo il DOM per Ottenere il tipo di lavoro selezionato dall'utente
    const tipoLavoro = document.getElementById('tipoLavoro').value;
    let prezzoOrario = prezziOrari[tipoLavoro];

    //condizione che Se il tipo di lavoro non è selezionato, non va avanti
    if (!prezzoOrario) {
        alert("Seleziona un tipo di lavoro valido.");
        return;
    }
   
    let prezzoFinale = oreDiLavoro * prezzoOrario;

    const codiciPromozionali = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24'];
    const codicePromozionale = document.getElementById('codicePromozionale').value;
    let codiceValido = false;

    // Controlla se il codice promozionale inserito è valido
    for (let i = 0; i < codiciPromozionali.length; i++) {
        if (codiciPromozionali[i] === codicePromozionale) {
            codiceValido = true;
            prezzoFinale *= 0.75; // Applica sconto del 25%
            break; // Esce dal ciclo una volta trovato un codice validos
        }
    }

    // Avvisa l'utente se il codice promozionale non è valido
    if (codicePromozionale !== "" && !codiceValido) {
        alert("Codice promozionale non valido");
    }

    // Mostra il prezzo finale in "forma umana"
    document.getElementById('prezzo').textContent = `€ ${prezzoFinale.toFixed(2)}`;
    document.getElementById('prezzoFinale').style.display = 'block'; // Mostra il prezzo finale
});