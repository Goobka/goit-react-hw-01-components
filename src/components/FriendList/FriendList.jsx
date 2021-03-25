import { Component } from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import styles from './FriendList.module.css';

class FriendList extends Component {
  render() {
    const { friends } = this.props;
    return (
      <ul className={styles.friend__list}>
        {friends.map(friend => (
          <FriendListItem key={friend.id} friend={friend} />
        ))}
      </ul>
    );
  }
}

FriendList.propTypes = {
  friends: PropTypes.array,
};

export default FriendList;
