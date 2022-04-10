import s from './Friends.module.css';
import PropTypes from 'prop-types';

export default function Friends({arrayOfFriends}) {
    return (
        <ul className={s.friendList}>
            {arrayOfFriends.map(friend =>
            {
                    console.log(friend.isOnline)
                    return <li className={s.item} key={friend.id}>
                        <span className={s.status} style={{ backgroundColor:  friend.isOnline  ? 'green' : 'red' }}>{friend.isOnline}</span>
                    <img className={s.avatar} src={friend.avatar} alt="User avatar" width="48" />
                    <p className={s.name}>{friend.name}</p>
                </li>
            }
            )}  
        </ul>)
}

Friends.propTypes = {
 arrayOfItems:  PropTypes.array,
}