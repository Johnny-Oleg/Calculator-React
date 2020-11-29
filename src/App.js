import React, { Component } from 'react';

import Total from './components/total/Total';
import History from './components/history/History';
import Operation from './components/operation/Operation';

class App extends Component {
  state = {
    transactions: JSON.parse(localStorage.getItem('calcMoney')) || [],
    description: '',
    amount: '',
    resultIncome: 0,
    resultExpenses: 0,
    totalBalance: 0,
  }
  
  componentWillMount = () => this.getTotalBalance();

  componentDidUpdate = () => this.addStorage();

  addTransaction = add => {
    const transactions = [...this.state.transactions];
    
    const transaction = { 
      id: `cmr${(+new Date()).toString(16)} 💵`,
      description: this.state.description,
      amount: parseFloat(this.state.amount),
      add,
    }

    transactions.push(transaction);

    this.setState({ transactions, description: '', amount: '' }, this.getTotalBalance);
  };

  addDescription = ({ target }) => this.setState({ description: target.value });

  addAmount = ({ target }) => this.setState({ amount: target.value });

  getIncome = () => this.state.transactions
    .reduce((acc, item) => item.add ? item.amount + acc : acc, 0);

  getExpenses = () => this.state.transactions
    .reduce((acc, item) => !item.add ? item.amount + acc : acc, 0);

  getTotalBalance = () => {
    const resultIncome = this.getIncome();
    const resultExpenses = this.getExpenses();

    const totalBalance = resultIncome - resultExpenses;

    this.setState({ resultIncome, resultExpenses, totalBalance });
  };

  addStorage = () => {
    localStorage.setItem('calcMoney', JSON.stringify(this.state.transactions));
  };

  delTransaction = id => {
    const transactions = this.state.transactions.filter(item => item.id !== id);

    this.setState({ transactions }, this.getTotalBalance);
  };
 
  render() {
    const { addTransaction, addDescription, addAmount, delTransaction } = this;
    const { transactions, description, amount, resultIncome, resultExpenses, totalBalance } = this.state;

    return (
      <>
        <header> 
          <h1>Wallet</h1>
          <h2>Calc money</h2>
        </header>
        <main>
          <div className="container">
            <Total 
              income={resultIncome}
              expenses={resultExpenses}
              balance={totalBalance}
            />
            <History transactions={[...transactions]} delTransaction={delTransaction} />
            <Operation
              addTransaction={addTransaction}
              addDescription={addDescription}
              addAmount={addAmount}
              description={description}
              amount={amount}
            />  
          </div>
        </main>
      </>
    );
  }  
};

export default App;