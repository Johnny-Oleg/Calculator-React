import React from 'react';

import HistoryItem from './HistoryItem';

const History = ({ transactions, delTransaction }) => {
    return (
        <section className="history">
            <h3>Transaction history</h3>
            <ul className="history__list">
                {transactions.map(item => <HistoryItem key={item.id} transaction={item} delTransaction={delTransaction} />)}
            </ul>
        </section>
    )
};

export default History;