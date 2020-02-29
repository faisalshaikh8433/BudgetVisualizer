import React, { Component } from "react";

export default class Item extends Component {
  state = {
    qty: 0
  };

  handleIncrement = () => {
    const { qty } = this.state;
    const newQty = parseInt(qty) + 1;
    this.setState({ qty: newQty });
    this.props.onBuild(this.props.cost);
  };

  handleDecrement = () => {
    const { qty } = this.state;
    if (parseInt(qty) > 0) {
      const newQty = parseInt(qty) - 1;
      this.setState({ qty: newQty });
      this.props.onUndo(this.props.cost);
    }
  };

  handleInput = currentQty => {
    let diffQty = currentQty - this.state.qty;

    if (diffQty > 0) {
      this.handleBuild(diffQty);
    } else {
      this.handleUndo(Math.abs(diffQty));
    }

    this.setState({ qty: currentQty });
  };

  handleBuild = qty => {
    const totalCost = this.props.cost * qty;
    this.props.onBuild(totalCost);
  };

  handleUndo = qty => {
    const totalCost = this.props.cost * qty;
    this.props.onUndo(totalCost);
  };

  render() {
    const { name, cost, imgSrc, currentBudget } = this.props;
    const { qty } = this.state;
    return (
      <div className="px-6 py-4 bg-white flex flex-col justify-between items-center">
        <img src={imgSrc} className="w-16 md:w-20 lg:w-24 py-2 mb-2" />

        <strong className="text-sm md:text-base lg:text-xl font-medium text-center tracking-tight leading-tight">
          {name}
        </strong>

        <span className="text-xl text-green-800 font-bold">
          ₹ {cost.toLocaleString("en-IN")}
        </span>

        <div className="flex flex-row my-4 justify-center">
          <button
            className={` px-4 py-2 text-white rounded text-lg font-bold mr-1 ${
              this.state.qty === 0
                ? "cursor-not-allowed bg-red-300"
                : "bg-red-500"
            }`}
            onClick={this.handleDecrement}
            disabled={this.state.qty === 0}
          >
            -
          </button>

          <input
            type="number"
            value={qty}
            onChange={e => {
              this.handleInput(e.target.value);
            }}
            className="w-16 border text-center mx-1"
          />

          <button
            className={` px-4 py-2 text-white rounded text-lg font-bold ml-1 ${
              currentBudget - cost < cost
                ? "cursor-not-allowed bg-green-400"
                : "bg-green-700"
            }`}
            onClick={this.handleIncrement}
            disabled={currentBudget - cost < cost}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}
