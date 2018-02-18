const React = require('react');
const Explanation = require('./Explanation');
const { Button } = require('react-bootstrap');
const Web3 = require('web3');

const { toWei } =
  // web3 1.X
  Web3.utils || {
    // web3 0.20.X
    toWei: Web3.prototype.toWei,
  };

/* the main page for the index route of this app */
class Contribute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    this.setState({ amount: event.target.value });
  }

  handleSubmit(event) {
    alert('A donation was submitted: ' + this.state.amount);
    const { donateHandler } = this.props;

    event.preventDefault();
    const weiToDonate = toWei(this.state.amount, 'ether');
    console.log(weiToDonate);

    if (donateHandler) {
      const result = donateHandler(weiToDonate);
      console.log(result);
    } else {
      console.log('donateHandler not found');
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ width: 600, maxWidth: '80%', paddingTop: 20, margin: '0 auto' }}>
            <h1>
              How many leaves would you like to donate?
            </h1>
            <h4>
              Leaves give you voting powers proportional to your share of the market cap when deciding which lands should be protected next.
            </h4>
            <div style={{ paddingTop: 12 }}>
              <div style={{ fontSize: 20, paddingRight: 8, display: 'inline-block', verticalAlign: 'top' }}>
                <label>
                  ETH to donate:{'  '}
                  <input type="text" value={this.state.amount} onChange={this.handleChange} />
                </label>
              </div>
              <div style={{ display: 'inline-block', verticalAlign: 'top' }}>
                <Button type="submit" style={{ backgroundColor: '#336713', color: 'white' }}> Donate now </Button>
              </div>
            </div>
          </div>
        </div>
        <Explanation />
      </form>
    );
  }
}

module.exports = Contribute;