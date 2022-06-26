import s from './TransactionHistory.module.css';

function TransactionHistory({items}) {
  return (
    <table class="transaction-history">
    <thead>
        <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
        </tr>
    </thead>

    <tbody>
    {items && items.map(({type, amount, currency}) => (
        <><tr>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
            </>
        ))}
    </tbody>
    </table>
  )
}

export default TransactionHistory