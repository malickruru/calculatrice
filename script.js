//* Déclaration de variable

var operation = ""; //chaine de caractère affichée sur l'écran
var operationResultat=0; // résultat de l'opération



//* Fonction

//2.mettre à jour l'opération a chaque fois qu'un chiffre est donné
function AfficherOperation(resultat = ""){
    $("#ecranDeCalcul").html(operation + resultat);
}


function MajCalgo(nbr){
    operation+=nbr;
    // ecrire l'operation à l'écran
    AfficherOperation()
}

//3.effacer l'opération
function effacer(){
    operation ="";
    AfficherOperation()
}

//convertir la chaine de caractère en opération et afficher le résultat
function egal(){
    operationResultat =  eval(operation);
    AfficherOperation(" = &nbsp; "+"<label STYLE='color:green; padding:0; margin:0;'>" +operationResultat+" </label> ")
}

// lier les au buttons

$('.nombre,.operateur').click(function (e) { 
    MajCalgo(e.currentTarget.innerText)
});

$('#effacer').click(function (e) { 
    effacer()
});

$('.egal').click(function (e) { 
    egal()
});
