import React from "react";
import ReactDOM from "react-dom";
import Clients from "components/Clients";
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  render() {
    return <h3><Clients client= "" /></h3>;
    
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));