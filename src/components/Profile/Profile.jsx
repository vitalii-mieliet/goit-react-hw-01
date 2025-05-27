import style from "./Profile.module.css";
export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className={style.profile}>
      <div className={style.avatarWrapper}>
        <img className={style.avatar} src={avatar} alt={username} />
        <p className={style.username}>{username}</p>
        <p className={style.tag}>@{tag}</p>
        <p className={style.location}>{location}</p>
      </div>

      <ul className={style.stats}>
        <li className={style.statItem}>
          <span className={style.label}>Followers</span>
          <span className={style.quantity}>{stats.followers}</span>
        </li>
        <li className={style.statItem}>
          <span className={style.label}>Views</span>
          <span className={style.quantity}>{stats.views}</span>
        </li>
        <li className={style.statItem}>
          <span className={style.label}>Likes</span>
          <span className={style.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
