/**
 * Общий файл скриптов на весь сайт
 */



$( document ).ready( function () {

  /** Плавное появление карточек принципа накопления */
  $( document ).scroll( showPrincipleCards );
  showPrincipleCards();

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
function showPrincipleCards() {
  $( '.lazy-load' ).each( function () {
    if (
      ( window.scrollY <= this.offsetTop + this.clientHeight )
      &&
      ( window.scrollY + window.innerHeight >= this.offsetTop )
    ) $( this ).attr( 'data-shown', 'true' );
    else $( this ).attr( 'data-shown', 'false' );
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
