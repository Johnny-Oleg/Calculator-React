import React from 'react';

const HistoryItem = ({ transaction, delTransaction }) => {
    const { description, amount, add, id } = transaction;

    return (
        <li className={`history__item ${add ? 
            'history__item-plus' : 'history__item-minus'}`}>
            {description}
            <span className="history__money">{amount} ₽</span>
            <button className="history__delete" onClick={() => delTransaction(id)}>x</button>
        </li>
    )
};

export default HistoryItem;