/**
 * Объект ресурсов для игры
 */

window.gameResources = {
  'jerry:idle': new EntityImage( {
    'path': '..\\img\\sprites\\jerry-idle.png',
    'width': 28,
    'height': 42,
  } ),
  'jerry:walk': new EntitySprite( {
    'path': '..\\img\\sprites\\jerry-walk.png',
    'frameCount': 8,
    'width': 28,
    'height': 42,
    'animationDuration': 1000,
  } ),
  'tuffy:idle': new EntityImage( {
    'path': '..\\img\\sprites\\tuffy-idle.png',
    'width': 28,
    'height': 27,
  } ),
  'tuffy:walk': new EntitySprite( {
    'path': '..\\img\\sprites\\tuffy-walk.png',
    'frameCount': 3,
    'width': 28,
    'height': 27,
    'animationDuration': 300,
  } ),
  'tom:walk': new EntitySprite( {
    'path': '..\\img\\sprites\\tom-walk.png',
    'frameCount': 15,
    'width': 32,
    'height': 45,
    'animationDuration': 1900,
  } ),
  'hill': new EntityImage( {
    'path': '..\\img\\Chair.png',
    'width': 200,
    'height': 200,
  } ),
  'cheese': new EntityImage( {
    'path': '..\\img\\Cheese.png',
    'width': 137,
    'height': 95,
  } ),
  'bg': new EntityImage( {
    'path': '..\\img\\BG.jpg',
    'width': 1599,
    'height': 837,
  } ),
  'audio': ( function () {
    let audio = new Audio();
    audio.src = '..\\media\\audio.mp3';
    return audio;
  } )(),
}