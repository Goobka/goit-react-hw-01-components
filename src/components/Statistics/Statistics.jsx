import { Component } from 'react';
import PropTypes from 'prop-types';

function randomColor(color) {
  let r = ('0' + ((Math.random() * 256) | 0).toString(16)).slice(-2),
    g = ('0' + ((Math.random() * 256) | 0).toString(16)).slice(-2),
    b = ('0' + ((Math.random() * 256) | 0).toString(16)).slice(-2);
  return '#' + r + g + b;
}

class Statistics extends Component {
  render() {
    return (
      <section className="statistics">
        <h2 className="title">{this.props.title}</h2>

        <ul className="stat-list">
          {this.props.stats.length > 0 &&
            this.props.stats.map(el => (
              <li
                key={el.id}
                className="item"
                style={{ backgroundColor: `${randomColor()}` }}
              >
                <span className="label">{el.label}</span>
                <span className="percentage">{el.percentage}%</span>
              </li>
            ))}
        </ul>
      </section>
    );
  }
}

Statistics.defaultProps = {
  title: '',
  stats: [],
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ),
};

export default Statistics;
