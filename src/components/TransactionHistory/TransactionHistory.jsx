import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

class TransactionHistory extends Component {
  render() {
    return (
      <table className={styles['transaction-history']}>
        <thead>
          <tr className={styles.thead__tr}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {this.props.items.map(item => (
            <tr key={item.id} className={styles.tbody__tr}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

TransactionHistory.defaultProps = {
  items: [],
};

TransactionHistory.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};

export default TransactionHistory;
