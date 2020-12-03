/**
 * Общий файл скриптов на весь сайт
 */



$( document ).ready( function () {

  /** Плавное появление карточек принципа накопления */
  $( document ).scroll( scrollfect );
  scrollfect();

  /** По нажатию на кнопку-бургер переключить видимость меню */
  $( '#js-burger' ).click( toggleNavMenu );

} );



/**
 *
 * =========================
 * Независимые функции
 * =========================
 *
 */



/**
 * Плавное появление карточек принципа накопления
 * =========================
 */
function scrollfect() {
  $( '.scrollfect--block' ).each( function () {
    if (
      ( window.scrollY <= this.offsetTop + this.clientHeight )
      &&
      ( window.scrollY + window.innerHeight >= this.offsetTop )
    ) $( this ).attr( 'scrollfect-visible', 'true' );
    else $( this ).attr( 'scrollfect-visible', 'false' );
  } );
}



/**
 *
 * =========================
 * Опсание функций-обработчиков
 * =========================
 *
 */



/**
 * Переключение видимости навигационного меню
 * =========================
 */
function toggleNavMenu() {
  $( this ).toggleClass( 'active' );
  $( '.nav__menu' ).toggleClass( 'show' );

  $( 'body' ).toggleClass( 'scroll-fix' );
}
