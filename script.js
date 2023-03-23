//* Déclaration de variable

var operation = ""; //chaine de caractère affichée sur l'écran
var operationResultat = 0; // résultat de l'opération



//* Fonction

//2.mettre à jour l'opération a chaque fois qu'un chiffre est donné
function AfficherOperation(resultat = "") {
    $("#ecranDeCalcul").html(operation + resultat);
}

function AfficherErreur(err) {
    $("#ecranDeCalcul").html(err);
}


function MajCalgo(nbr) {
    
    operation += nbr;
    // ecrire l'operation à l'écran
    AfficherOperation()
}

//3.effacer l'opération
function effacer() {
    operation = "";
    AfficherOperation()
}

//convertir la chaine de caractère en opération et afficher le résultat
function egal() {
    try {
        // arrondir le résultat
        operationResultat = eval(operation).toFixed(2);
    }
    catch (err) {
        AfficherErreur("<label STYLE='color:red; padding:0; margin:0;'>expression invalide veuillez effacer et recommencer </label> ")
        return
    }
    AfficherOperation(" = &nbsp; " + "<label STYLE='color:green; padding:0; margin:0;'>" + operationResultat + " </label> ")
}

// lier les au buttons

$('.nombre,.operateur').click(function (e) {
    classe = e.currentTarget.className
    value = e.currentTarget.innerText
    classe == 'operateur' ? MajCalgo(` ${value} `) : MajCalgo(value)
});

$('#effacer').click(function (e) {
    effacer()
});

$('.egal').click(function (e) {
    egal()
});

