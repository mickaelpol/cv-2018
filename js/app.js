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


    let starHtml = document.getElementById('starHtml');
    let starBoot = document.getElementById('starBoot');
    let starJs = document.getElementById('starJs');
    let starPhp = document.getElementById('starPhp');
    let starMysql = document.getElementById('starMysql');
    let starScrum = document.getElementById('starScrum');


    function addEtoile(emp, starGold, starBlack) {
        let icoGold = `<i class="fa fa-star gold"></i>`;
        let icoBlack = `<i class="fa fa-star black"></i>`;
        emp.innerHTML = icoGold.repeat(starGold) + icoBlack.repeat(starBlack);
    }

    addEtoile(starHtml,4,1);
    addEtoile(starBoot,5,0);
    addEtoile(starJs,4,1);
    addEtoile(starPhp,3,2);
    addEtoile(starMysql,4,1);
    addEtoile(starScrum,3,2);

    
});