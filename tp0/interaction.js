// Créer une classe DnD contenant les 4 attributs suivants initialisé à 0 : les coordonnées de la position initiale du DnD ;
//  celles de la position finale. Ces attributs seront utilisés plus tard lors de la création de formes.
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// les coordonnées de la position initiale du DnD ;
  this.initialX = 0
  this.initialY = 0 

	// les coordonnées de la position finale du DnD ;
  this.finalX = 0
  this.finalY = 0

  this.isPressed = false

	// Developper les 3 fonctions gérant les événements
  this.handlePress =function(evt) {
    if (!this.isPressed){
      this.initialX = evt.x
      this.initialY = evt.y
      console.log("initX", this.initialX)
      console.log("initY",this.initialY)
      console.log("fX",this.finalX)
      console.log("fY", this.finalY)
      
    }
    interactor.onInteractionStart(this);
    this.isPressed = true

  }.bind(this);

  this.handleMove=function(evt){
    if (this.isPressed){
      this.finalX = evt.x
      this.finalY = evt.y
      console.log("initX", this.initialX)
      console.log("initY",this.initialY)
      console.log("fX",this.finalX)
      console.log("fY", this.finalY)
    }
    interactor.onInteractionUpdate(this);

  }.bind(this);

  this.handleUnpress=function(evt){
    this.isPressed = false
    console.log("initX", this.initialX)
    console.log("initY",this.initialY)
    console.log("fX",this.finalX)
    console.log("fY", this.finalY)
    interactor.onInteractionEnd(this);
  }.bind(this);
  
	// Associer les fonctions précédentes aux évènements du canvas.
  canvas.addEventListener('mousedown', this.handlePress, false);
  canvas.addEventListener('mousemove', this.handleMove, false);
  canvas.addEventListener('mouseup', this.handleUnpress, false);
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



