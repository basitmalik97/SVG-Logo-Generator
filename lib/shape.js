// This is the parent class that will be extended by child classes (Circle, Square, Triangle).
class Shape {
    constructor(shapeColor, text, textColor) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }
};

module.exports = Shape;