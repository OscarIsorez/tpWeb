
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd

	this.onInteractionStart = function () {
		console.log("initX", this.initialX, "initY", this.initialY, "fX", this.finalX, "fY", this.finalY)
		if (this.currentShape != 0) {
			if (this.currEditingMode = editingMode.line) {
				this.currentShape = new Rectangle()
			}
			else if (this.currEditingMode = editingMode.rect) {

			}
			else {
				console.error("You must select either a Rectangle or a Line before drawing anything")
			}
		}
	}.bind(this);

	this.onInteractionUpdate = function () {
		console.log("initX", this.initialX, "initY", this.initialY, "fX", this.finalX, "fY", this.finalY)
		if (this.currentShape != 0) {
			if (this.currEditingMode = editingMode.line) {
				this.currentShape.endX = this.finalX
				this.currentShape.endY = this.finalY
			}
			else if (this.currEditingMode = editingMode.rect) {
				this.currentShape.width = this.finalX - this.initialX
				this.currentShape.height = this.finalY - this.initialY
			}
			else {
				console.error("You must select either a Rectangle or a Line before drawing anything")
			}
			drawing.shapes.set(this.currentShape.id, this.currentShape)
			drawing.paint(ctx, canvas)
		}



	}.bind(this);

	this.onInteractionEnd = function () {
		this.currentShape = 0
		drawing.paint(ctx, canvas)


	}.bind(this);
};


