import React, { Component } from "react";

export default class Item extends Component {
  state = {
    qty: 0
  };

  handleBuild = () => {
    const { qty } = this.state;
    const newQty = parseInt(qty) + 1;
    this.setState({ qty: newQty });
    const totalCost = this.props.cost * newQty;
    this.props.onBuild(totalCost);
  };

  handleUndo = () => {
    const { qty } = this.state;
    if (parseInt(qty) > 0) {
      const newQty = parseInt(qty) - 1;
      let totalCost = this.props.cost;
      this.setState({ qty: newQty });
      totalCost = this.props.cost * newQty;
      this.props.onUndo(totalCost);
    }
  };

  render() {
    const { name, cost, imgSrc } = this.props;
    const { qty } = this.state;
    return (
      <div className="px-6 py-4 bg-white flex flex-col justify-between items-center">
        <img src={imgSrc} className="w-12 md:w-14 lg:w-20 py-2 mb-2" />

        <strong className="text-sm md:text-base lg:text-xl font-medium text-center tracking-tight leading-tight">
          {name}
        </strong>

        <span className="text-xl text-green-800 font-bold">
          ₹ {cost.toLocaleString("en-IN")}
        </span>

        <div className="flex flex-row my-4 justify-center">
          <button
            className="bg-red-500 px-4 py-2 text-white rounded text-lg font-bold mr-1"
            onClick={this.handleUndo}
          >
            -
          </button>

          <input
            type="number"
            value={qty}
            onChange={e => this.setState({ qty: e.target.value })}
            className="w-16 border text-center mx-1"
          />

          <button
            className="bg-green-700 px-4 py-2 text-white rounded text-lg font-bold ml-1"
            onClick={this.handleBuild}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}