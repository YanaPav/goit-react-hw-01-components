import PropTypes from "prop-types"
import { Table, TableHeader, TableBody, TableRow } from './TransactionHistory.styled'

export const TransactionHistory = ({ transactions }) => {
    
    return <Table>
                <TableHeader>
                    <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                    </tr>
                </TableHeader>

                <TableBody>{transactions.map(transaction => {
                    const {type, amount, currency, id } = transaction
                    return <TableRow key={id}>
                            <td>{type}</td>
                            <td>{amount}</td>
                            <td>{currency}</td>
                        </TableRow>}
                    )}
                </TableBody>
            </Table>
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    }))
}