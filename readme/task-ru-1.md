## Задание: REST сервис

## Nest cli Support

* `nest generate --help` все команды
* Для **быстрого создания CRUD контроллера** со встроенной валидацией, вы можете использовать CRUD-генератор CLI: $ `nest g resource cats`.
* Чтобы создать контроллер с помощью CLI, просто выполните команду $ `nest g controller cats`.
* Чтобы создать сервис с помощью CLI, просто выполните команду $ `nest g service cats`.
* Чтобы создать module с помощью CLI, просто выполните команду $ `nest g module cats`.

```bash
nest g res user(s)
nest g res artist(s)
nest g res track(s)
nest g res album(s)
nest g res favorite(s)
```
### Описание

Ссылка на задание - [rest-service/assignment](https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/rest-service/assignment.md)

Давайте создадим сервис для домашней библиотеки! `Пользователи` могут создавать, читать, обновлять и удалять данные об `Исполнителях`, `Треках` и `Альбомах`, добавлять их в `Избранное` в своей домашней библиотеке!

Обратите внимание! Для этого задания вы должны создать новый репозиторий из [шаблона](https://github.com/rolling-scopes-school/nodejs-course-template/generate). Имя его должно быть nodejs2023Q2-service, то есть полная ссылка на репозиторий должна быть https://github.com/%your-gihub-id%/nodejs2023Q2-service.

**Создайте приложение, которое будет работать со следующими ресурсами:**

- `Пользователь` (с атрибутами):
  ```typescript
  interface User {
    id: string; // uuid v4
    login: string;
    password: string;
    version: number; // целое число, увеличивается при обновлении
    createdAt: number; // время создания
    updatedAt: number; // время последнего обновления
  }
  ```

- `Исполнитель` (с атрибутами):
  ```typescript
  interface Artist {
    id: string; // uuid v4
    name: string;
    grammy: boolean;
  }
  ```

- `Трек` (с атрибутами):
  ```typescript
  interface Track {
    id: string; // uuid v4
    name: string;
    artistId: string | null; // ссылка на исполнителя
    albumId: string | null; // ссылка на альбом
    duration: number; // целое число, продолжительность
  }
  ```

- `Альбом` (с атрибутами):
  ```typescript
  interface Album {
    id: string; // uuid v4
    name: string;
    year: number;
    artistId: string | null; // ссылка на исполнителя
  }
  ```

- `Избранное` (с атрибутами):
  ```typescript
  interface Favorites {
    artists: string[]; // id избранных исполнителей
    albums: string[]; // id избранных альбомов
    tracks: string[]; // id избранных треков
  }
  ```

**Детали:**

(Полное описание в оригинале)

**Подсказки**

* Для генерации всех ID сущностей используйте пакет [uuid](https://www.npmjs.com/package/uuid) или [Node.js аналог](https://nodejs.org/dist/latest-v20.x/docs/api/crypto.html#cryptorandomuuidoptions).
