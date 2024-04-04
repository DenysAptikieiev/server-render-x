export function getPageTitle(pathname, userId = null) {
  switch (pathname) {
    case '/':
      return 'Головна сторінка список користувачів';
    case `/users-posts/${userId}`:
      return 'Список постов користувачів';
    case `/users-albums/${userId}`:
      return 'Список альбомов постів';
    default:
      return 'Моя додаткова сторінка';
  }
}

export function getPageDescription(pathname, userId = null) {
  switch (pathname) {
    case '/':
      return 'Тут можна переглянути список користувачів';
    case `/users-posts/${userId}`:
      return 'Тут можна переглянути список постів';
    case `/users-albums/${userId}`:
      return 'Тут можна переглянути список альбомов';
    default:
      return 'Опис моєї додаткової сторінки';
  }
}
