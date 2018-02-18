const React = require('react');

const { Button } = require('react-bootstrap');

/* the main page for the index route of this app */
class Submit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      propName: '',
      beneficiery: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleBenChange = this.handleBenChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ propName: event.target.value });
  }

  handleBenChange(event) {
    this.setState({ beneficiery: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.propName + ' a ben: ' + this.state.beneficiery);
    const { submitProp } = this.props;

    event.preventDefault();

    if (submitProp) {
      submitProp(this.state.propName, this.state.beneficiery);
    } else {
      console.log('submitProp not found');
    }
  }

  render() {
    return (
      <div className="container">
        <h3 style={{ paddingTop: 48 }}> Submit a property that's for sale. Others will vote, and your property may be purchased and put into the trust! </h3>
        <form style={{ fontSize: 20 }} onSubmit={this.handleSubmit}>
          <div>
            <label>
              Name:{'  '}
              <input type="text" value={this.state.propName} onChange={this.handleChange} />
            </label>
          </div>
          <div>
            <label>
              Beneficiery address:{'  '}
              <input type="text" value={this.state.beneficiery} onChange={this.handleBenChange} />
            </label>
          </div>
          <div>
            <Button 
              type="submit"
              style={{ fontSize: 18, color: 'white', background: '#336713', fontWeight: 700, border: 0, borderRadius: 3, padding: '12px 24px' }}
            >
              Vote
            </Button>
          </div>
        </form>
      </div>
    );
  }

}

module.exports = Submit;