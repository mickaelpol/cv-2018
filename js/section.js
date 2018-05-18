// -------- Chargement de jquery ------- //
$(document).ready(function () {

    // -------- id du contenu d'une page ------- //

    var home = $('#home');
    var comp = $('#comp');
    var xp = $('#xp');
    var cv = $('#cvPdf');

    // Fonction qui va gerer l'intégration du contenu en fonction du bouton cliqué
    function loadSwitch(cont1, cont2, cont3, cont4) {

        // je cache le contenu competence et experiences pour afficher le home par défaut
        cont2.hide();
        cont3.hide();

        // J'ecoute tous les a de ma page 
        $('a').click(function () {

            // je recupere l'id du a qui vient d'etre cliqué
            switch (this.id) {

                // Si le bouton homeClick est cliquer
                case 'homeClick':

                    // j'execte ce code ci-dessous
                    cont3.delay(200).fadeOut();
                    cont2.delay(200).fadeOut();
                    cont1.delay(600).fadeIn();
                    break;

                    // Si le bouton compClick est cliquer
                case 'compClick':

                    // j'execute ce code ci-dessous
                    cont1.delay(200).fadeOut();
                    cont3.delay(200).fadeOut();
                    cont2.delay(600).fadeIn();
                    break;

                    // Si le bouton xpClick est cliquer
                case 'xpClick':

                    // j'execute ce code ci-dessous
                    cont2.delay(200).fadeOut();
                    cont1.delay(200).fadeOut();
                    cont3.delay(600).fadeIn();
                    break;
            }

        });

    };

    function downloadCv() {

        cv.click(function (e) {
            // e.preventDefault();


        });


    };

    // J'execute ma fonction
    loadSwitch(home, comp, xp);

    downloadCv();


});