
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd

	this.onInteractionStart = function(){
		if (this.currentShape != 0){
			if(this.currEditingMode =  editingMode.line){
				this.currentShape = new Rectangle()
			}
			else if (this.currEditingMode = editingMode.rect){

			}
			else{
				console.error("You must select either a Rectangle or a Line before drawing anything")
			}
		}
	}

	this.onInteractionUpdate = function(){


	}

	this.onInteractionEnd = function(){

	}
};


