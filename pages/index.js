import React, { Component } from "react";

class Item extends Component {
  state = {
    qty: 0
  };

  handleBuild = () => {
    const { qty } = this.state;
    const newQty = qty + 1;
    this.setState({ qty: newQty });
    const totalCost = this.props.cost * newQty;
    this.props.onBuild(totalCost);
  };

  handleUndo = () => {
    const { qty } = this.state;
    if (qty > 0) {
      const newQty = qty - 1;
      this.setState({ qty: newQty });
      const totalCost = this.props.cost * newQty;
      this.props.onUndo(totalCost);
    }
  };

  render() {
    const { name, cost, onBuild, imgSrc } = this.props;
    const { qty } = this.state;
    return (
      <div className="px-6 py-4 bg-white flex flex-col justify-center items-center rounded m-1">
        <img src={imgSrc} className="w-16 py-2" />
        <strong className="text-xl">{name}</strong>

        <span className="text-xl mt-2 text-green-800 font-bold">
          ₹ {cost.toLocaleString("en-IN")}
        </span>

        <div className="flex flex-row my-4">
          <button
            className="bg-red-500 px-4 py-2 text-white rounded text-xs mr-1"
            onClick={this.handleUndo}
          >
            Undo
          </button>

          <input
            type="number"
            value={qty}
            onChange={e => this.setState({ qty: e.target.value })}
            className="w-16 border text-center mx-1"
          />

          <button
            className="bg-green-700 px-4 py-2 text-white rounded text-xs ml-1"
            onClick={this.handleBuild}
          >
            Build
          </button>
        </div>
      </div>
    );
  }
}

const TOTAL_BUDGET = 75900000000000;

class HomePage extends Component {
  state = {
    budget: TOTAL_BUDGET
  };

  handleBuild = cost => {
    const { budget } = this.state;
    this.setState({ budget: budget - cost });
  };

  handleUndo = cost => {
    const { budget } = this.state;
    if (TOTAL_BUDGET >= budget) {
      this.setState({ budget: budget + cost });
    }
  };

  render() {
    return (
      <main className="flex w-full justify-center items-center px-6 my-20 lg:p-0 lg:my-0">
        <div className="container max-w-3xl">
          <header className="px-12 py-8 bg-white my-2">
            <h1 className="font-bold text-3xl leading-tight text-center">
              What all can be done with this budget?
            </h1>
          </header>

          <section className="bg-green-500 px-12 py-4 text-white flex justify-center my-2">
            <h3 className="font-bold text-2xl text-center">
              ₹ {this.state.budget.toLocaleString("en-IN")} left
            </h3>
          </section>
          <section className="flex flex-1 flex-col lg:flex-row flex-wrap my-2">
            <Item
              name="A Meal/Thali"
              cost={50}
              onBuild={this.handleBuild}
              onUndo={this.handleUndo}
              imgSrc="/food.svg"
            />
            <Item
              name="Free 120 units Electricity per house"
              cost={600}
              onBuild={this.handleBuild}
              onUndo={this.handleUndo}
              imgSrc="/plug.svg"
            />
            <Item
              name="Stop Farmer Suicide: Loan Waiver"
              cost={150000}
              onBuild={this.handleBuild}
              onUndo={this.handleUndo}
              imgSrc="/agriculture.svg"
            />
            <Item
              name="Build A School"
              cost={20000000}
              onBuild={this.handleBuild}
              onUndo={this.handleUndo}
              imgSrc="/school.svg"
            />
            <Item
              name="Build a 100 bed Hospital"
              cost={40000000}
              onBuild={this.handleBuild}
              onUndo={this.handleUndo}
              imgSrc="/health.svg"
            />
            <Item
              name="Set up IITs"
              cost={12000000000}
              onBuild={this.handleBuild}
              onUndo={this.handleUndo}
              imgSrc="/university.svg"
            />
            <Item
              name="A 2BHK flat in Delhi"
              cost={5000000}
              onBuild={this.handleBuild}
              onUndo={this.handleUndo}
              imgSrc="/house.svg"
            />
            <Item
              name="A 2BHK flat in Mumbai"
              cost={10000000}
              onBuild={this.handleBuild}
              onUndo={this.handleUndo}
              imgSrc="/house.svg"
            />
            <Item
              name="A Private Jet Aeroplane"
              cost={350000000}
              onBuild={this.handleBuild}
              onUndo={this.handleUndo}
              imgSrc="/plane.svg"
            />
            <Item
              name="Build a house like Mukesh Ambani's Antilia"
              cost={140000000000}
              onBuild={this.handleBuild}
              onUndo={this.handleUndo}
              imgSrc="/flat.svg"
            />
          </section>
        </div>
      </main>
    );
  }
}

export default HomePage;
