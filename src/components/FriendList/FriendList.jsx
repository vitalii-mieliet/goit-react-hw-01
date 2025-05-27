import FriendListItem from "../FriendListItem/FriendListItem";
import style from "./FriendList.module.css";

export default function Friendlist({ friends }) {
  return (
    <div>
      <ul className={style.friendListContainer}>
        {friends.map(friend => (
          <li key={friend.id}>
            <FriendListItem
              name={friend.name}
              avatar={friend.avatar}
              isOnline={friend.isOnline}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
