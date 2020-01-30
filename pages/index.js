import React, { Component } from 'react';

class Item extends Component {
  state = {
    qty: 0
  }

  handleBuild = () => {
    const { qty } = this.state;
    const newQty = qty + 1;
    this.setState({ qty: newQty });
    const totalCost = this.props.cost * newQty;
    this.props.onBuild(totalCost);
  }

  handleUndo = () => {
    const { qty } = this.state;
    if (qty > 0) {
      const newQty = qty - 1;
      this.setState({ qty: newQty });
      const totalCost = this.props.cost * newQty;
      this.props.onUndo(totalCost);
    }
  }

  render() {
    const { name, cost, onBuild } = this.props;
    const { qty } = this.state;
    return (
        <div className="px-6 py-4 bg-white flex flex-col justify-center items-center rounded m-1">
          <strong className="text-xl">{name}</strong>

          <span className="text-green-800 font-bold">₹ {cost.toLocaleString('en-IN')}</span>

          <div className="flex flex-row my-4">
            <button className="bg-red-500 px-4 py-2 text-white rounded text-xs mr-1" onClick={this.handleUndo}>
              Undo
            </button>

            <input type="number" value={qty} onChange={e => this.setState({ qty: e.target.value})} className="w-16 border text-center mx-1" />

            <button className="bg-green-700 px-4 py-2 text-white rounded text-xs ml-1" onClick={this.handleBuild}>
              Build
            </button>
          </div>
        </div>
    )
  }
}

const TOTAL_BUDGET = 90000000000000;

class HomePage extends Component {

  state = {
    budget: TOTAL_BUDGET,
  };

  handleBuild = cost => {
    const { budget } = this.state;
    this.setState({ budget:  budget - cost })
  }

  handleUndo = cost => {
    const { budget } = this.state;
    if (TOTAL_BUDGET >= budget) {
      this.setState({ budget: budget + cost })
    }
  }

  render() {
    return (
        <main className="flex w-full h-screen justify-center items-center px-6 py-16 lg:p-0">
          <div className="container max-w-3xl">
            <header className="px-12 py-8 bg-white my-2">
              <h1 className="font-bold text-3xl leading-tight text-center">What all can be done with this budget?</h1>
            </header>

            <section className="bg-green-500 px-12 py-4 text-white flex justify-center my-2">
              <h3 className="font-bold text-2xl text-center">₹ {this.state.budget.toLocaleString('en-IN')} left</h3>
            </section>

            <section className="flex flex-1 flex-col lg:flex-row flex-wrap my-2">
              <Item name="New University" cost={10000000} onBuild={this.handleBuild} onUndo={this.handleUndo} />
              <Item name="Fix potholes" cost={2500000} onBuild={this.handleBuild} onUndo={this.handleUndo} />
              <Item name="Generate new jobs" cost={4500000} onBuild={this.handleBuild} onUndo={this.handleUndo} />
              <Item name="Improve health care" cost={6000000} onBuild={this.handleBuild} onUndo={this.handleUndo} />
            </section>
          </div>
        </main>
    );
  }
}

export default HomePage