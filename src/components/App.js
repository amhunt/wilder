// @flow

import React from "react";
import Home from "./Home";
import fetchContracts from "../helpers/fetchContracts";
import WilderVoting from "../helpers/WilderVoting";
import "./App.css";

class App extends React.Component {
  state: {
    votePending: boolean,
    votes: any,
    wilderVotes: any,
    wilderPoll: any,
    poll: any
  };

  constructor(props: { network: string }) {
    super(props);
    this.state = {
      votePending: false,
      votes: null,
      wilderVotes: null,
      wilderPoll: null,
      poll: null
    };
  }

  async componentDidMount(): any {
    const { contracts } = await fetchContracts(this.props.network, ["WilderStake"]);
    const wilderPoll = new WilderVoting(contracts.WilderStake);
    const wilderVotes = await wilderPoll.fetchVotes();

    this.setState({
      wilderPoll,
      wilderVotes,
    });
  }

  propSubmitHandler = async (name: string, address: string) => {
    const result = await this.state.wilderPoll.submitProp(name, address);
    console.log(result);
  };

  donateHandler = async (amount: number) => {
    await this.state.wilderPoll.donateEth(amount);
    const money = await this.state.wilderPoll.totalRaised();
    console.log(money);
  };

  voteHandler = async (projectIdx: number) => {
    const result = await this.state.wilderPoll.vote(projectIdx);
    console.log(result);
  };

  render() {
    return (
      <div style={{ fontFamily: '\'Roboto\', sans-serif'}}>
        <Home
          wilderPoll={this.state.wilderPoll}
          voteHandler={this.voteHandler}
          donateHandler={this.donateHandler}
          propSubmitHandler={this.propSubmitHandler}
          votes={this.state.wilderVotes}
        />
      </div>
    );
  }
}

export default App;
