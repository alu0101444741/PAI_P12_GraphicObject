/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since May 12 2022
 * @desc Clase Ball
 * @module ball
 */

 'use static';

 /** @desc Clase Ball */
export class Ball {
  #coordinateX;
  #coordinateY;
  #diameter;
  #height;
  #width;
  #context;
  #pixelsToMove;
  #inputValue;
  #BUTTON_UP;
  #BUTTON_DOWN;
  #BUTTON_RIGHT;
  #BUTTON_LEFT;
  #keys;
  /**
   * @desc Constructor de la clase Ball.
   * Inicializa la bola en el centro del canvas, con un diámetro igual a la suma de
   * altura y anchura divididas por 20. 
   * @param {Number} height - altura (tamaño en eje Y)
   * @param {Number} width - anchura (tamaño en eje X)
   * @param {HTMLElement} canvas - canvas sobre el que dibujar las figuras
   * @param {Number} pixelsToMove - en caso de moverse, la cantidad de píxeles
   *                          a desplazarse en cualquier dirección.
  */
  constructor(height, width, canvas, pixelsToMove = 10) {
    this.#height = height;
    this.#width = width;
    this.#pixelsToMove = pixelsToMove;
    this.#context = canvas.getContext('2d');
    this.#inputValue = document.getElementById('inputValue'); 
    this.#coordinateX = width / 2;
    this.#coordinateY = height / 2;
    this.#diameter = (height + width) / 20;
    
    this.#keys = {};
    this.#BUTTON_UP = document.getElementById('Up');
    this.#BUTTON_DOWN = document.getElementById('Down');
    this.#BUTTON_RIGHT = document.getElementById('Right');
    this.#BUTTON_LEFT = document.getElementById('Left');
    this.#BUTTON_UP.addEventListener('click', () => this.#onClickUp());
    this.#BUTTON_DOWN.addEventListener('click', () => this.#onClickDown());
    this.#BUTTON_RIGHT.addEventListener('click', () => this.#onClickRight());
    this.#BUTTON_LEFT.addEventListener('click', () => this.#onClickLeft());    
    window.addEventListener('keydown', (event) => this.#pressKey(event.key));
    window.addEventListener('keyup', (event) => this.#releaseKey(event.key));
  }

  /** @desc Método para dibujar la bola */
  #draw() {
    this.#context.beginPath();
    this.#context.fillStyle = 'rgb(255,0,0)';
    this.#context.strokeStyle = 'rgb(0,0,0)';
    this.#context.ellipse(this.#coordinateX, this.#coordinateY, this.#diameter, this.#diameter, Math.PI / 4, 0, Math.PI * 2);
    this.#context.fill();
    this.#context.stroke();
  }

  /** @desc Método para animar la bola dibujada */
  update() {
    this.#pixelsToMove = Number(this.#inputValue.value);
    this.#context.clearRect(0, 0, this.#width, this.#height);
    this.#draw();
    window.requestAnimationFrame(() => this.update());
  }
 
  /** @desc Método para desplazar la bola un número determinado de píxeles hacia arriba */
  #onClickUp() {
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
   * @desc Método para comprobar hacia donde debe moverse la bola según las teclas presionadas,
   * y ejecutar dicho desplazamiento.
   * @param {String} pressedKey - identificador de la tecla presionada
  */
  #pressKey(pressedKey) {
    this.#keys[pressedKey] = true;
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
   * @param {String} pressedKey - identificador de la tecla liberada
  */
  #releaseKey(pressedKey) {
    this.#keys[pressedKey] = false;
  }
}