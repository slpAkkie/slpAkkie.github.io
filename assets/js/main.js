/**
 * Общий файл скриптов на весь сайт
 */



$( document ).ready( function () {

  /**
   * Выполним показ элементов,
   * находящихся в видимых координатах браузера по Y
   *
   * Потом установим обработчики на прокрутку страницы
   * и на изменение размера страницы
   * чтобы показывать элементы, которые могли попасть в
   * видимую часть экрана
   */
  scrollfect();
  $( window ).resize( scrollfect );
  $( document ).scroll( scrollfect );

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
    let headerHeight = $( 'nav.header__nav' ).height();

    if (
      ( window.scrollY + headerHeight <= this.offsetTop + this.clientHeight )
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
