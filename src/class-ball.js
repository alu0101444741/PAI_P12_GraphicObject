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
  #height;
  #width;
  #context;
  /**
   * @desc Constructor de la clase Ball
   * @param {Number} height - altura (tamaño en eje Y)
   * @param {Number} width - anchura (tamaño en eje X)
   * @param {HTMLElement} canvas - canvas sobre el que dibujar las figuras
   * @param {Number} pixels - en caso de moverse, la cantidad de píxeles
   *                          a desplazarse en cualquier dirección.
  */
  constructor(height, width, canvas, pixels) { 
    this.#height = height;
    this.#width = width; 
    this.#pixels = pixels;   
    this.#context = canvas.getContext('2d');
    this.#context.strokeStyle = 'rgb(255,255,255)';
    this.#context.beginPath();
  }

  /** @desc Método para dibujar la bola */
  draw() {
    
  }

  /** @desc Método para animar la bola dibujada */
  /*update() {
    this.#context.clearRect(0, 0, this.#width, this.#height);
    this.draw();
    window.requestAnimationFrame(() => this.update());
  }*/
}