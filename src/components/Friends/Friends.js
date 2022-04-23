import s from './Friends.module.css';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

export default function Friends({ arrayOfFriends }) {
  return (
    <ul className={s.friendList}>
      {arrayOfFriends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          key={id}
        />
      ))}
    </ul>
  );
}

Friends.propTypes = {
  arrayOfItems: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    }).isRequired
  ),
};
