/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since May 12 2022
 * @desc Script to execute the ball drawing
 * @module moving-ball
 */

 'use static';

 import { Ball } from '../class-ball/class-ball.js';
 
  const CANVAS = document.getElementById('ball');
  const WIDTH = Number(document.getElementById('ball').getAttribute('width'));
  const HEIGHT = Number(document.getElementById('ball').getAttribute('height')); 
  const PIXELS = 20;

 /** @desc Función main para probar el funcionamiento de la clase Ball*/
function main() {
  //alert(`width = ${WIDTH} -><- height = ${HEIGHT}`);  
  CANVAS.style.background = "cyan";  
  let movingBall = new Ball(HEIGHT, WIDTH, CANVAS, PIXELS);
  movingBall.update();
}
main();