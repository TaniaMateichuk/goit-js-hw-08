// Ознайомся з документацією бібліотеки Vimeo плеєра.
// Додай бібліотеку як залежність проекту через npm.
// Ініціалізуй плеєр у файлі скрипта як це описано в секції pre-existing player, але враховуй, що у тебе плеєр доданий як npm пакет, а не через CDN.
// Вивчи документацію методу on() і почни відстежувати подію timeupdate - оновлення часу відтворення.
// Зберігай час відтворення у локальне сховище. Нехай ключем для сховища буде рядок "videoplayer-current-time".
// Під час перезавантаження сторінки скористайся методом setCurrentTime() з метою відновлення відтворення зі збереженої позиції.
// Додай до проекту бібліотеку lodash.throttle і зроби так, щоб час відтворення оновлювався у сховищі не частіше, ніж раз на секунду.
import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
const LOCAL_STORAGE_TIME = 'video-player-current-time';
const timePause = localStorage.getItem('LOCAL_STORAGE_TIME') || 0;


const onPlay = function (data) {
  const currentTime = data.seconds;
  localStorage.setItem('LOCAL_STORAGE_TIME', currentTime);

}

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(timePause).catch(function (error) {
  switch (error.name) {
    case 'RangeError':
      break;
    default:
      break;
  }
});
