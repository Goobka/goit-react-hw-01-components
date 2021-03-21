import { Component } from 'react';
import PropTypes from 'prop-types';

class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <div className="description">
          <img
            src={this.props.avatar}
            alt="Аватар пользователя"
            className="avatar"
          />
          <p className="name">{this.props.name}</p>
          <p className="tag">@{this.props.tag}</p>
          <p className="location">{this.props.location}</p>
        </div>

        <ul className="stats">
          <li>
            <span className="label">Followers</span>
            <span className="quantity">{this.props.stats.followers}</span>
          </li>
          <li>
            <span className="label">Views</span>
            <span className="quantity">{this.props.stats.views}</span>
          </li>
          <li>
            <span className="label">Likes</span>
            <span className="quantity">{this.props.stats.likes}</span>
          </li>
        </ul>
      </div>
    );
  }
}

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export default Profile;
