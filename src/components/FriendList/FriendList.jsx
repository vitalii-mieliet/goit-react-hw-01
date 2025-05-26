import FriendListItem from "../FriendListItem/FriendListItem";

export default function Friendlist({ friends }) {
  return (
    <div>
      Friendlist
      <ul>
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
