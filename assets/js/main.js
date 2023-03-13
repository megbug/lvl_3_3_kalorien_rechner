/*
Was brauche ich alles für mein Projekt ?

x funktionen

für Grundumsatz für Männer
664,7 + (13,7 * Körpergewicht in kg) + (5 * Körpergröße in cm) – (6,8 * Alter in Jahren) = Grundumsatz 
(664.7 + (13.7 * weight) + (5 * height) - (6.8 * age))
für Grundumsatz für Frauen
655,1 + (9,6 * Körpergewicht in kg) + (1,8 * Körpergröße in cm) – (4,7 * Alter in Jahren) = Grundumsatz
(655,1 + (9,6 * weight) + (1,8 * height) - (4,7 * age))
    als variable werden gebraucht gewicht; größe und alter

    let weight 
    let height
    let age 

    let grundumsatz

    let gesamtumsatz

    if male checked
        (männliche Formel)
    else 
        (weibliche Formel)

für Gesamtumsatz: Wert aus Grundumsatz * PAL Faktor 

    switch activity  
        (grundumsatz * PAL Faktor activity)

für KJ 
    kcal  * 4.1868 kJ
*/

console.log("it works");

const femaleRadioBtn = document.querySelector('#female');

const calculation = () => {
    const weight = document.querySelector('#weight').value;
    const height = document.querySelector('#height').value;
    const age = document.querySelector('#age').value;

    const grundumsatzOutputKcal = document.querySelector('#grundumsatzOutputKcal');
    const grundumsatzOutputKj = document.querySelector('#grundumsatzOutputKj');
    const gesamtumsatzOutputKcal = document.querySelector('#gesamtumsatzOutputKcal');
    const gesamtumsatzOutputKj = document.querySelector('#gesamtumsatzOutputKj');

    let grundumsatz;
    let gesamtumsatz;

    if (femaleRadioBtn.checked) {
        grundumsatz = Number((655.1 + (9.6 * weight) + (1.8 * height) - (4.7 * age)));
        grundumsatzOutputKcal.innerHTML = (grundumsatz).toFixed(2);
        grundumsatzOutputKj.innerHTML = (grundumsatz * 4.1868).toFixed(2);
    }
    else {
        grundumsatz = Number((664.7 + (13.7 * weight) + (5 * height) - (6.8 * age)));
        grundumsatzOutputKcal.innerHTML = (grundumsatz).toFixed(2);
        grundumsatzOutputKj.innerHTML = (grundumsatz * 4.1868).toFixed(2);
    }

    const activityLevel = document.querySelector('#activityLevel').value;

    switch (activityLevel) {
        case "sleep":
            gesamtumsatz = grundumsatz * 0.95;
            break;
        case "sittingOrLaying":
            gesamtumsatz = grundumsatz * 1.2;
            break;
        case "onlySitting":
            gesamtumsatz = grundumsatz * 1.5;
            break;
        case "sittingStandingWalking":
            gesamtumsatz = grundumsatz * 1.7;
            break;
        case "standingOrWalking":
            gesamtumsatz = grundumsatz * 1.9;
            break;
        case "heavyBodyWork":
            gesamtumsatz = grundumsatz * 2.2;
            break;
    }

    gesamtumsatzOutputKcal.innerHTML = Number(gesamtumsatz).toFixed(2);
    gesamtumsatzOutputKj.innerHTML = Number(gesamtumsatz * 4.1868).toFixed(2);
}


