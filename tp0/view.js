Rectangle.prototype.paint = function(ctx) {
    //TODO Manager color
    ctx.beginPath();
    ctx.rect(this.originX, this.originY, this.width, this.height)
    // ctx.rect(initX,initY,finalX,finalY);
    // ctx.stroke();
    
    ctx.stroke();
  };
  
  Line.prototype.paint = function(ctx) {
    //TODO Manager color
    ctx.beginPath();
    ctx.moveTo(this.getInitX(), this.getInitY());
    ctx.lineTo(this.getFinalX(), this.getFinalY());
    ctx.stroke();
  };    
  
  Drawing.prototype.paint = function(ctx) {
    //console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getForms().forEach(function (eltDuTableau) {
      // now fill the canvas
      eltDuTableau.paint(ctx);
    });
  };
  