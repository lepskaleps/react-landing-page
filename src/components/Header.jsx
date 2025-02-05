import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <>
        <link rel="stylesheet" href="Style.css" />
        <h1>Header</h1>
        <div className="container" itemID="header">
          <p>teste de css</p>
        </div>
      </>
    );
  }
}
