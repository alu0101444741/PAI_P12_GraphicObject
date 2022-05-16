/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since May 12 2022
 * @desc Clase FancyBall
 * @module fancy-ball
 */

 'use static';

 /** @desc Clase FancyBall */
export class FancyBall {
  #coordinateX;
  #coordinateY;
  #diameter;
  #height;
  #width;
  #context;
  #inputValue;
  #pixelsToMove;
  #BUTTON_UP;
  #BUTTON_DOWN;
  #BUTTON_RIGHT;
  #BUTTON_LEFT;
  #keys;
  #time;
  #startTime;
  /**
   * @desc Constructor de la clase Ball
   * @param {Number} height - altura (tamaño en eje Y)
   * @param {Number} width - anchura (tamaño en eje X)
   * @param {HTMLElement} canvas - canvas sobre el que dibujar las figuras
   * @param {Number} pixelsToMove - en caso de moverse, la cantidad de píxeles
   *                          a desplazarse en cualquier dirección.
  */
  constructor(height, width, canvas, pixelsToMove) { 
    this.#height = height;
    this.#width = width;
    this.#pixelsToMove = pixelsToMove;
    this.#context = canvas.getContext('2d');
    this.#inputValue = document.getElementById('inputValue');
    this.#coordinateX = width / 2;
    this.#coordinateY = height / 2;
    this.#diameter = (height + width) / 20;
    this.#startTime = Date.now();
    this.#keys = {};

    this.#BUTTON_UP = document.getElementById('Up');
    this.#BUTTON_DOWN = document.getElementById('Down');
    this.#BUTTON_RIGHT = document.getElementById('Right');
    this.#BUTTON_LEFT = document.getElementById('Left');
    /*this.#BUTTON_UP.addEventListener('click', () => this.#onClickUp());
    this.#BUTTON_DOWN.addEventListener('click', () => this.#onClickDown());
    this.#BUTTON_RIGHT.addEventListener('click', () => this.#onClickRight());
    this.#BUTTON_LEFT.addEventListener('click', () => this.#onClickLeft());*/
    this.#BUTTON_UP.addEventListener('mousedown', () => this.#onClickUp());
    this.#BUTTON_DOWN.addEventListener('mousedown', () => this.#onClickDown());
    this.#BUTTON_RIGHT.addEventListener('mousedown', () => this.#onClickRight());
    this.#BUTTON_LEFT.addEventListener('mousedown', () => this.#onClickLeft());
    /*this.#BUTTON_UP.addEventListener('mouseup', () => this.#outClickUp());
    this.#BUTTON_DOWN.addEventListener('mouseup', () => this.#outClickDown());
    this.#BUTTON_RIGHT.addEventListener('mouseup', () => this.#outClickRight());
    this.#BUTTON_LEFT.addEventListener('mouseup', () => this.#outClickLeft());*/
   
    window.addEventListener('keydown', (event) => this.#pressKey(event.key));
    window.addEventListener('keyup', (event) => this.#checkKeyReleased(event.key));
  }

  /** @desc Método para dibujar la bola */
  #draw() {
    this.#context.beginPath();
    this.#context.fillStyle = this.#colorByTime(this.#time - this.#startTime);
    this.#context.strokeStyle = 'rgb(0,0,0)';
    this.#context.ellipse(this.#coordinateX, this.#coordinateY, this.#diameter, this.#diameter, Math.PI / 4, 0, Math.PI * 2);
    this.#context.fill();
    this.#context.stroke();
  }

  /** @desc Método para animar la bola dibujada */
  update() {
    this.#pixelsToMove = Number(this.#inputValue.value);
    this.#time = (Date.now() - this.#startTime) / 100;
    this.#context.clearRect(0, 0, this.#width, this.#height);
    
    // Modo epiléptico
    //this.#context.fillStyle = this.colorByTime((this.#time - this.#startTime) * 2);
    //this.#context.fillRect(0, 0, this.#width, this.#height);

    // Modo MUY epiléptico
    /*let partitionSize = 128;
    for (let width = 0; width <= this.#width; width += (this.#width / partitionSize)) {      
      for (let height = 0; height <= this.#height; height += (this.#height / partitionSize)) {
        this.#context.fillStyle = `rgb(${(this.#time * (width + height)) % 255},${0},${(this.#startTime * (width + height)) % 255})`//this.colorByTime(time);
        this.#context.fillRect(width - this.#width / partitionSize, height - this.#height / partitionSize, width, height);
      }      
    }*/
    this.#draw();
    window.requestAnimationFrame(() => this.update());
  }
 
  /** @desc Método para desplazar la bola un número determinado de píxeles hacia arriba */
  #onClickUp() {
    //alert(`Movida ${this.#pixelsToMove}px. hacia ARRIBA`);
    this.#coordinateY = Math.max(this.#coordinateY - this.#pixelsToMove, 0 + this.#diameter + this.#context.lineWidth);
  }
  
  /** @desc Método para desplazar la bola un número determinado de píxeles hacia abajo */
  #onClickDown() {
    this.#coordinateY = Math.min(this.#coordinateY + this.#pixelsToMove, this.#height - (this.#diameter + this.#context.lineWidth));
  }
  
  /** @desc Método para desplazar la bola un número determinado de píxeles hacia la derecha */
  #onClickRight() {
    this.#coordinateX = Math.min(this.#coordinateX + this.#pixelsToMove, this.#width - (this.#diameter + this.#context.lineWidth));
  }
  
  /** @desc Método para desplazar la bola un número determinado de píxeles hacia la izquierda */
  #onClickLeft() {
    this.#coordinateX = Math.max(this.#coordinateX - this.#pixelsToMove, 0 + this.#diameter + this.#context.lineWidth);
  }

  /**
   * @desc Método para comprobar hacia donde debe moverse la bola según las teclas presionadas
   * y ejecutar dicho desplazamiento.
   * @param {String} key - identificador de la tecla presionada
  */
  #pressKey(key) {
    this.#keys[key] = true;
    if (this.#keys['w']) {
      this.#onClickUp();
    }
    if (this.#keys['s']) {
      this.#onClickDown();
    }
    if (this.#keys['d']) {
      this.#onClickRight();
    }
    if (this.#keys['a']) {
      this.#onClickLeft();
    }
  }

  /**
   * @desc Método para desactivar el movimiento en una determinada dirección cuando una tecla
   * ha sido liberada.
   * @param {String} key - identificador de la tecla liberada
  */
  #checkKeyReleased(key) {
    this.#keys[key] = false;
  }

  /**
   * @desc Método para obtener un color según el instante de tiempo actual. La única variable cambiante
   * es el tiempo, que se calcula restando el instante actual al instante en el que se creó la instancia
   * actual
   * @param {Number} time - diferencia de tiempo
   * @return {String} cadena con formato 'rgb(R,G,B)'
  */
  #colorByTime(time) {
    let frequency = 0.3;
    let red = Math.ceil(Math.sin(frequency * time + 0) * 127 + 128);
    let green = Math.ceil(Math.sin(frequency * time + 2) * 127 + 128);
    let blue = Math.ceil(Math.sin(frequency * time + 4) * 127 + 128);
    return `rgb(${red},${green},${blue})`;
  }
}