function Rectangle(a,b) {
    this.setA(a);
    this.setB(b);
}

Rectangle.prototype.countArea = function () { 
    return (this.a*this.b);
 }

 Rectangle.prototype.setA = function (valueA) { 
    var a = parseFloat(valueA);

    if (a>0) {
        this.a = a;
        return true;
    }
    return false;
  }

  Rectangle.prototype.setB = function (valueB) { 
    var b = parseFloat(valueB);

    if (b>0) {
        this.b = b;
        return true;
    }
    return false;
  }

module.exports = Rectangle;