
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
function Drawing() {
    this.shapes = []

}

function Shape(thickness, color ){
    this.thickness = thickness
    this.color = color
    


}

function Rectangle(originX, originY, width, height, thickness, color) {
    this.originX = originX
    this.originY = originY
    this.width = width
    this.height = height

    Shape.call(thickness, color)

    
    

}


function Line(originX, originY, thickness, color) {
    this.originX = originX
    this.originY = originY

    Shape.call(thickness, color)
    
}
