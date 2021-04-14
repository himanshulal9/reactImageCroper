import React from "react";
import ReactToPrint, { PrintContextConsumer } from "react-to-print";
import MyCoustomComponent from "./myCoustomComponent";

class ComponentToPrint extends React.Component {
  render() {
    return <MyCoustomComponent />;
  }
}

export class Example extends React.Component {
  render() {
    return (
      <div>
        <ReactToPrint content={() => this.componentRef}>
          <PrintContextConsumer>
            {({ handlePrint }) => (
              <button onClick={handlePrint}>Print this out!</button>
            )}
          </PrintContextConsumer>
        </ReactToPrint>
        <ComponentToPrint ref={(el) => (this.componentRef = el)} />
      </div>
    );
  }
}
