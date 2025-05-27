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
