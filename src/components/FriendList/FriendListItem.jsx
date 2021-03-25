import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

class FriendListItem extends Component {
  render() {
    const { friend } = this.props;
    return (
      <li className={styles.item}>
        <span
          className={friend.isOnline === true ? styles.online : styles.offline}
        >
          {friend.isOnline}
        </span>
        <img
          className={styles.avatar}
          src={friend.avatar}
          alt="avatar"
          width="48"
        ></img>
        <p className={styles.name}>{friend.name}</p>
      </li>
    );
  }
}

FriendListItem.defaultProps = {
  friend: {},
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};

export default FriendListItem;
