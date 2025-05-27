import clsx from "clsx";
import style from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={style.friendCard}>
      <img src={avatar} alt={name} width="48" />
      <p className={style.friendName}>{name}</p>
      <p
        className={clsx(style.status, isOnline ? style.online : style.offline)}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}

// Залежно від пропа isOnline, текст в p.status повинен змінюватися, а його колір тексту - також. Якщо значення true, то текст Online і колір тексту зелений, в іншому випадку текст Offline і червоний колір тексту. Це можна зробити за допомогою різних CSS-класів.

// Приклад використання компонента FriendList в компоненті App. Дані про друзі це масив об'єктів із відомими властивостями. Використовуй ці дані в своїй роботі для значень пропсів.
