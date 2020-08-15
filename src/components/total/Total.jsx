import React from 'react';

const Total = props => {
    const { income, expenses, balance } = props;

    return (
        <section className="total">
            <header className="total__header">
                <h3>Balance</h3>
                <p className="total__balance">{balance} 💲</p>
            </header>
            <div className="total__main">
                <div className="total__main-item total__expenses">
                    <h4>Expenses</h4>
                    <p className="total__money total__money-expenses">
                        - {expenses} 💲
                    </p>
                </div>
                <div className="total__main-item total__income">
                    <h4>Income</h4>
                    <p className="total__money total__money-income">
                        + {income} 💲
                    </p>
                </div>
            </div>
        </section>
    )
};

export default Total;