
// importation de la classe Game.js
import Game from './game.js';


// mise en place de l'action des clics sur les boutons + les gestionnaires du clavier pour contrôler le panier
const init = () => {
  const canvas = document.getElementById("playfield");
  const partie = new Game(canvas);
  const startBut=document.getElementById("stopAndStartGame");
  document.getElementById("stopAndStartGame").addEventListener("click", () =>partie.startAndStop());
  window.addEventListener('keydown', partie.keyDownActionHandler.bind(partie));
  window.addEventListener('keyup', partie.keyUpActionHandler.bind(partie));
  


}

window.addEventListener("load",init);

//
console.log('le bundle a été généré');
