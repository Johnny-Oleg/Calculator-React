import React from 'react';

const Operation = props => {
    const { addTransaction, addDescription, addAmount, description, amount } = props;

    return (
        <section className="operation">
            <h3>New transaction</h3>
            <form id="form">
                <label>
                    <input 
                        onChange={addDescription}
                        value={description}
                        type="text" 
                        className="operation__fields operation__name" 
                        placeholder="Name of the operation" 
                    />
                </label>
                <label>
                    <input
                        onChange={addAmount}
                        value={amount}
                        type="number"
                        className="operation__fields operation__amount" 
                        placeholder="Enter the amount" 
                    />
                </label>
                <div className="operation__btns">
                    <button 
                        onClick={() => addTransaction(false)}
                        type="button" 
                        className="operation__btn operation__btn-subtract"
                    >
                        Expenses
                    </button>
                    <button 
                        onClick={() => addTransaction(true)}
                        type="button" 
                        className="operation__btn operation__btn-add"
                    >
                        Income
                    </button>
                </div>
            </form>
        </section>
    )
};

export default Operation;