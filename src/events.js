/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since May 12 2022
 * @desc Funciones 
 * @module events
 */

 'use static';

 /**
  *  Quiero probar a cambiar las funciones por métodos de la clase Ball.
  * La idea es que los eventos hagan cambiar las coordenadas de la bola.
  * En el método update puedo dibujarla constantemen, entonces por ejemplo:
  * onClickMoveUp cambiaría las coordenadas de la bola X += PIXELS;
  * 
  *   
  */

 const BUTTON_UP = document.getElementById('Up');
 BUTTON_UP.addEventListener('click', onClickUp);
 
 const BUTTON_DOWN = document.getElementById('Down');
 BUTTON_DOWN.addEventListener('click', onClickDown);
 
 const BUTTON_RIGHT = document.getElementById('Right');
 BUTTON_RIGHT.addEventListener('click', onClickRight);
 
 const BUTTON_LEFT = document.getElementById('Left');
 BUTTON_LEFT.addEventListener('click', onClickLeft);

function onClickUp() {
  let ball = new ball(HEIGHT, WIDTH, CANVAS, PIXELS);
  ball.update();
}
  
function onClickDown() {
  let ball = new ball(HEIGHT, WIDTH, CANVAS, PIXELS);
  ball.update();
}
  
function onClickRight() {
  let ball = new ball(HEIGHT, WIDTH, CANVAS, PIXELS);
  ball.update();
}
  
function onClickLeft() {
  let ball = new ball(HEIGHT, WIDTH, CANVAS, PIXELS);
  ball.update();
}