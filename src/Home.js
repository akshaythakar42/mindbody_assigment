import React from "react";
import Button from "./Button";
import Calculator from "./Calculator";
import Grid from './Grid';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        key:""
    };
  }

  handleClick = (key) => {
    this.setState({key});
  }
  
  render() {
    return (
      <div className="frame">
        <div className="button-row">
          <Button label={"Calculator"} handleClick={() => this.handleClick("Calculator")} />
          <Button label={"Grid For Records"} handleClick={() => this.handleClick("Grid")} />
          <Button label={"Undo & Redo"} handleClick={() => this.handleClick("Undo")} />
        </div>
        {
            this.state.key === "Calculator" && <Calculator/>
        }
        {
            this.state.key === "Grid" && <Grid/>
        }
        {
            this.state.key === "Undo" && null
        }
      </div>
    );
  }
}

export default Home;
