import s from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

export default function TransactionHistory({arrayOfTransaction}) {

    return (
        <table className={s.transactionHistory}>
            <thead>
              <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
              </tr>
            </thead>

            <tbody>
                {arrayOfTransaction.map(transaction => 
                <tr key={transaction.id}>
                    <td>{transaction.type}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.currency}</td>
                </tr>)}    
            </tbody>
          </table>
    )
}

TransactionHistory.propTypes = {
    arrayOfTransaction:  PropTypes.array,
}