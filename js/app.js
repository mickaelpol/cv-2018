// Chargement de jquery
$(document).ready(function () {

    // stock des variable conteneu de ma photo de profil
    var photo = $('#photoProfil');
    var photo2 = $('#photoProfil2');

    // début de la requete ajax pour recuperer ma photo de profil
    $.ajax({

        // type de document recuperer
        dataType: "json",
        // url du document récupérer
        url: "https://spreadsheets.google.com/feeds/list/1-oYlvGP573O4ml4AzgapLhK_KoEqlfDIzvSnWz48_nQ/od6/public/values?alt=json",

        // fonction qui gere la reussite de la recupération de la données voulu
        success: function (data) {
            // Affiche l'image recuperer par la requete ajax dans l'id photoProfil 1 et 2
            photo.html('<img class="img-responsive img-rounded" src="' + data.feed.entry[9].gsx$url.$t + '"/>');
            photo2.html('<img class="img-responsive img-rounded" src="' + data.feed.entry[9].gsx$url.$t + '"/>');

        },

        error: function () { // renvoi d'erreur si la photo n'est pas bien ou pas recupérer
            photo.html("erreur");
            photo2.html("erreur");
        }

    });
    //Fin de ma requete ajax 
});