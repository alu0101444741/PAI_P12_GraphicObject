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

 import { Ball } from './class-ball.js';
 import { } from './events.js';
 
 const CANVAS = document.getElementById('ball');
 const WIDTH = Number(document.getElementById('ball').getAttribute('width'));
 const HEIGHT = Number(document.getElementById('ball').getAttribute('height'));

 /** @desc Función main para probar el funcionamiento de la clase Ball*/
function main() {
  //alert(`width = ${WIDTH} -><- height = ${HEIGHT}`);  
  CANVAS.style.background = "cyan";
  const PIXELS = 10;
  let movingBall = new Ball(HEIGHT, WIDTH, CANVAS, PIXELS);
  movingBall.update();  
}
main();