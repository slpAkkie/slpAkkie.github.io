/** Установим громкость на половину */
$( '#prehistory video' ).get( 0 ).volume = 0.5;
console.log( `Громкость плеера установленна на ${$( '#prehistory video' ).get( 0 ).volume}` );



/**
 * Установим обработчики
 */

// По окончанию ролика
$( '#prehistory video' ).on( 'ended', () => goToGameMenu( { end: true } ) );
// По нажатию пробела
$( document ).on( 'keydown', ( e ) => goToGameMenu( { key: e.code === 'Space' } ) );
// По нажатию на подсказку
$( '.skip' ).on( 'click', () => goToGameMenu( { click: true } ) );

// Выбор персонажа
$( '.character' ).on( 'click', chooseCharacter );
// Ввод никнейма
$( '#nickname input' ).on( 'keyup', checkStartButton );
// Клик по кнопке "Начать игру"
$( '#js-start, #js-restart' ).on( 'click', goToGame );
// Нажатия клавиш
$( document ).on( 'keydown keyup', keypress );



/**
 * Фнукции-обработчики
 */

// Проверка и переход на экран игрового меню
function goToGameMenu( { end, key, click } ) {
  if (
    window.window.gameData.screen !== 'prehistory'
    || ( !end && !key && !click )
  ) return;

  ( key || click ) && $( '#prehistory video' ).get( 0 ).pause();

  $( '#prehistory' ).toggleClass( 'hide' );
  $( '#game-menu' ).toggleClass( 'hide' );

  $( '#instruction p' ).each( ( k, v ) => {
    setTimeout( () => {
      $( v ).css( {
        'opacity': '1',
        'margin-left': '0',
      } );
    }, 100 * k );
  } );

  window.gameData.screen = 'menu';
  screenChangeLog();
}


// Выбор персонажа
function chooseCharacter() {
  $( this ).hasClass( 'chosen' )
    ? $( this ).removeClass( 'chosen' )
    : $( '.character' ).removeClass( 'chosen' ) && $( this ).addClass( 'chosen' );

  checkStartButton();
}

// Обновление состояния кнопки начала игры
function checkStartButton() {
  $( '#js-start' ).attr( 'disabled',
    !$( '#characters' ).find( '.chosen' ).length
    || !$( '#nickname input' ).val().length
  );
}

// Переход к экрану игры
function goToGame() {
  window.gameData.nickname = window.gameData.nickname || $( '#nickname input' ).val();
  window.gameData.character = window.gameData.character || $( $( '.chosen' ).get( 0 ) ).attr( 'data-character' ).toLowerCase();
  window.gameData.screen = 'game';
  screenChangeLog();

  $( '#game-menu' ).addClass( 'hide' );
  $( '#score-screen' ).addClass( 'hide' );
  $( '#game-zone' ).removeClass( 'hide' );

  window.gameDataLog();
  window.game = new Game( window.gameData.nickname, window.gameData.character );
}

// Изменяем состояние нажатых клавиш
function keypress( e ) {
  // Если кнопка зажата, то выходим
  if ( e.originalEvent.repeat || window.gameData.screen != 'game' || !window.game ) return;

  // Если кнопки передвижения, то переключаем действие игрока
  if ( e.type === 'keydown' )
    switch ( e.code ) {
      case 'KeyA':
        window.game.pressedKey.LEFT = true;
        break;
      case 'KeyD':
        window.game.pressedKey.RIGHT = true;
        break;
      case 'Escape':
        window.game.state.isPause = !window.game.state.isPause;
        $( '#pause-screen' ).toggleClass( 'hide' );
        break;
      case 'ShiftLeft':
      case 'ShiftRight':
        window.game.state.isMuted = !window.game.state.isMuted;
        break;
    }
  else
    switch ( e.code ) {
      case 'KeyA':
        window.game.pressedKey.LEFT = false;
        break;
      case 'KeyD':
        window.game.pressedKey.RIGHT = false;
        break;
    }
}



// Вывод изменения текущего экрана
function screenChangeLog() {
  console.log( `[window.gameData.screen] => ${window.gameData.screen}` );
}

// Вывод наименования текущего экрана
function gameDataLog() {
  console.log( `[window.gameData] =>` );
  console.log( window.gameData );
}