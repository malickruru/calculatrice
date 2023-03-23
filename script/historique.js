//* variable 

var historique = []

// * fonction

function afficherHistorique() {
    $('#historyValue').empty()
    historique.forEach(e => {
        var li = document.createElement('li')
        $(li).text(e);
        $('#historyValue').append(li);
    });
  }

function majHistorique(text) { 
    historique.push(text)
    afficherHistorique()
    localStorage.setItem('calgo_history',JSON.stringify(historique))
}
 
function effacerHistorique() { 
    historique = []
    afficherHistorique()
    localStorage.setItem('calgo_history',JSON.stringify(historique))
}

//* main

// si l'historique n'existe pas, en creer un
if (localStorage.getItem('calgo_history') == null) {
    localStorage.setItem('calgo_history','[]')
}

historique = JSON.parse(localStorage.getItem('calgo_history'))

// afficher l'historique 
afficherHistorique()

$("#eraseHistory").click(function (e) { 
    effacerHistorique()
});

