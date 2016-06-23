/* Comportement de la page modal*/
$(document).ready(function() {
   
   // Lorsque l'on clique sur show on affiche la fenêtre modale
   $('#show').click(function (e) {
       //On désactive le comportement du lien
        e.preventDefault();
      showModal();
   });
   
   // Lorsque l'on clique sur le fond on cache la fenetre modale   
   $('#fond').click(function () {
      hideModal();
    });
   
   // Lorsque l'on modifie la taille du navigateur la taille du fond change
   $(window).resize(function () {
      resizeModal()
   });
   
});


/* Afficher fenetre modal */
function showModal(){
   var id = '#modal';var id ='modalYannic'
   $(id).html('Veniam tincidunt augue abluo vero, augue nisl melior quidem secundum nobis singularis eum eum.<br/><a href="#" class="close">Fermer la fenetre</a>');
   //$(id).html('<h2>Yannic</h2>
    //    <h3>Apprenti magicien</h3>
     //    <p> Apprenti magicien de la programmation web, de nature autodidacte, je suis attiré par tout ce qui est attrait à la nouvelle technologie et par le monde informatique.<br>
     //     Je me forme actuellement au Javascrip alias Js, Html, PHP et Bootstrap.
     //    </p><br/><a href="#" class="close">Fermer la fenetre</a>')


   // On definit la taille de la fenetre modale
   resizeModal();
   
   // Effet de transition     
   $('#fond').fadeIn(1000);   
   $('#fond').fadeTo("slow",0.8);
   // Effet de transition   
   $(id).fadeIn(2000);
   
   $('.popup .close').click(function (e) {
      // On désactive le comportement du lien
      e.preventDefault();
      // On cache la fenetre modale
      hideModal();
    });
}




/* Suppression de la fenetre modal */
function hideModal(){
   // On cache le fond et la fenêtre modale
   $('#fond, .popup').hide();
   $('.popup').html('');
}

/* Changement de la taille de la fenetre modal */

function resizeModal(){
   var modal = $('#modal');
   // On récupère la largeur de l'écran et la hauteur de la page afin de cacher la totalité de l'écran
   var winH = $(document).height();
   var winW = $(window).width();
   
   // le fond aura la taille de l'écran
   $('#fond').css({'width':winW,'height':winH});
   
   // On récupère la hauteur et la largeur de l'écran
   var winH = $(window).height();
   // On met la fenêtre modale au centre de l'écran
   modal.css('top', winH/2 - modal.height()/2);
   modal.css('left', winW/2 - modal.width()/2);
}