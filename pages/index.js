import React, { Component } from "react";
import Item from "../components/Item";

const TOTAL_BUDGET = 3770318500000;

class HomePage extends Component {
  state = {
    budget: TOTAL_BUDGET
  };

  handleBuild = cost => {
    let amountLeft = this.state.budget - cost;
    if (amountLeft >= 0) {
      this.setState({ budget: amountLeft });
    } else {
      this.setState({ budget: 0 });
    }
  };

  handleUndo = cost => {
    this.setState({ budget: this.state.budget + cost });
  };

  render() {
    return (
      <main className="flex w-full justify-center items-center px-6 my-20 lg:p-0 lg:my-10">
        <div className="container max-w-3xl">
          <header className="px-12 py-8 bg-white my-2">
            <h1 className="font-black text-xl md:text-2xl lg:text-3xl leading-tight text-center">
              Spend Muskesh Ambani's Money
            </h1>
          </header>

          <section className="bg-green-500 px-4 sticky top-0 py-4 text-white flex justify-center my-2">
            <h3 className="font-bold text-xl md:text-2xl lg:text-3xl text-center">
              ₹ {this.state.budget.toLocaleString("en-IN")} left
            </h3>
          </section>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            <Item
              name="A Meal/Thali"
              cost={50}
              onBuild={this.handleBuild}
              onUndo={this.handleUndo}
              currentBudget={this.state.budget}
              imgSrc="/food.svg"
            />
            <Item
              name="Cooking Gas Cylinder"
              cost={714}
              onBuild={this.handleBuild}
              onUndo={this.handleUndo}
              currentBudget={this.state.budget}
              imgSrc="/gas.svg"
            />
            <Item
              name="Free 120 units Electricity per house"
              cost={600}
              onBuild={this.handleBuild}
              onUndo={this.handleUndo}
              currentBudget={this.state.budget}
              imgSrc="/plug.svg"
            />
            <Item
              name="Solar Electricity kit for each Household"
              cost={150000}
              onBuild={this.handleBuild}
              onUndo={this.handleUndo}
              currentBudget={this.state.budget}
              imgSrc="/solar-panel.svg"
            />
            <Item
              name="Stop Farmer Suicide: Loan Waiver"
              cost={150000}
              onBuild={this.handleBuild}
              onUndo={this.handleUndo}
              currentBudget={this.state.budget}
              imgSrc="/agriculture.svg"
            />
            <Item
              name="Build A School"
              cost={20000000}
              onBuild={this.handleBuild}
              onUndo={this.handleUndo}
              currentBudget={this.state.budget}
              imgSrc="/school.svg"
            />
            <Item
              name="Build a 100 bed Hospital"
              cost={40000000}
              onBuild={this.handleBuild}
              onUndo={this.handleUndo}
              currentBudget={this.state.budget}
              imgSrc="/health.svg"
            />
            <Item
              name="A 2BHK flat in Delhi"
              cost={5000000}
              onBuild={this.handleBuild}
              onUndo={this.handleUndo}
              currentBudget={this.state.budget}
              imgSrc="/house.svg"
            />
            <Item
              name="A 2BHK flat in Mumbai"
              cost={10000000}
              onBuild={this.handleBuild}
              onUndo={this.handleUndo}
              currentBudget={this.state.budget}
              imgSrc="/house.svg"
            />
            <Item
              name="A Private Jet Aeroplane"
              cost={350000000}
              onBuild={this.handleBuild}
              onUndo={this.handleUndo}
              currentBudget={this.state.budget}
              imgSrc="/plane.svg"
            />
            <Item
              name="By iPhone11"
              cost={69900}
              onBuild={this.handleBuild}
              onUndo={this.handleUndo}
              currentBudget={this.state.budget}
              imgSrc="/touch-screen.svg"
            />
          </section>
        </div>
      </main>
    );
  }
}

export default HomePage;
