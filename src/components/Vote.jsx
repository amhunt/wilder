const React = require('react');
const moment = require('moment');
const Web3 = require('web3');
const { Button } = require('react-bootstrap');
const Estimate = require('./Estimate');
const Modal = require('./Modal');

const { fromWei } =
  // web3 1.X
  Web3.utils || {
    // web3 0.20.X
    fromWei: Web3.prototype.fromWei,
  };

const properties = [
  {
    name: 'Colorado forest',
    submitter: 'Jamie L.',
    whyDesc: 'This land means so much to me. It runs right by the river that I grew up next to. We used to raft down to Denver, but this property is now under risk of deforestation and mining. Please help me protect this sacred property!',
    imageUrl: 'https://wallup.net/wp-content/uploads/2016/01/275917-landscape-nature-forest-lake-colorful-fall-trees-water-blue-red-yellow-green-aerial_view-748x468.jpg',
    cost: '$9,000',
    votes: '2489',
    id: 0,
  },
  {
    name: 'Alaskan Wilderness',
    submitter: 'Joseph Q.',
    whyDesc: 'This land means so much to me. It runs right by the river that I grew up next to. We used to raft down to Denver, but this property is now under risk of deforestation and mining. Please help me protect this sacred property!',
    imageUrl: 'https://static1.squarespace.com/static/5324cb3ae4b0c5c3326a28c8/533e10bee4b0258f11587f51/55b4210de4b0b31e18d4ff29/1437868302698/echo-lake-ancient-forest-aerial.jpg',
    cost: '$67,000',
    votes: '1805',
    id: 1,
  },
  {
    name: 'Oregon Butte, Echo Lake',
    submitter: 'Leonard C.',
    whyDesc: 'This land means so much to me. It runs right by the river that I grew up next to. We used to raft down to Denver, but this property is now under risk of deforestation and mining. Please help me protect this sacred property!',
    imageUrl: 'http://www.dronestagr.am/wp-content/uploads/2017/10/Aerial-Lake-700_-1-1200x800.jpg',
    cost: '$90,000',
    votes: '497',
    id: 2,
  },
];

const BLOCK_TIME_SEC = 15;

/* the main page for the index route of this app */
class Vote extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      timeRemaining: null,
      modalVisible: false,
      selectedProp: null,
    };

    this.handlePress = this.handlePress.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  
  componentDidMount() {
    if (typeof window.web3 !== 'undefined') {
      console.log('using mist or metamask');
      this.web3 = new Web3(window.web3.currentProvider);
      this.web3.eth.getBlockNumber((error, result) => {
        const remainingBlocks = (result + 30000) % 84000;
        const estRemainingTimeSecs = remainingBlocks * BLOCK_TIME_SEC;
        const date = moment.duration(estRemainingTimeSecs, 'seconds');
        this.setState({ timeRemaining: date });
      });
    } else {
      alert('Please install Mist or MetaMask to use Blockbin');
    }
  }

  handlePress(id) {
    this.setState({ modalVisible: true, selectedProp: id });
  }

  closeModal(id) {
    this.setState({ modalVisible: false });
  }
  
  render() {
    const { timeRemaining, modalVisible, selectedProp } = this.state;
    const { votes: voteArr, voteHandler } = this.props;
      
    return (
      <div>
        {modalVisible && <Modal selectedProp={selectedProp} voteHandler={voteHandler} closeModal={this.closeModal} />}
        <div style={{ textAlign: 'center', paddingTop: 16, paddingBottom: 20 }}>
          <h2>What should we protect next?</h2>
          <h4>Vote with <span style={{ fontWeight: 700 }}>leaves</span> to help decide:</h4>
          <div>
            {timeRemaining && (<Estimate timeRemaining={timeRemaining} />)}
            {voteArr && voteArr.length && (<div>{`Total number of projects: ${voteArr[0].length}`}</div>)}
          </div>
        </div>
        <div>
          {properties.map(property => {
            let propVotes = property.votes;

            if (voteArr && (property.id < voteArr.length)) {
              propVotes += fromWei(parseFloat(voteArr[0]), 'ether');
            }

            return (
              <div style={{ padding: 16, margin: '16px auto', width: '90%', borderColor: '#ddd', borderWidth: 1, borderStyle: 'solid' }} key={property.name} className="container">
                <div style={{ margin: 'auto', maxWidth: '100%' }} className="row">
                  <div style={{ minHeight: 300, backgroundSize: 'cover', backgroundImage: `url(${property.imageUrl})` }} className="col-sm-4" />
                  <div style={{ fontSize: 17 }} className="col-sm-8">
                    <div style={{ minHeight: 300 }}>
                      <div style={{ fontWeight: 600, paddingTop: 12, fontSize: 22 }}>
                        {property.name}
                      </div>
                      <div>Name of submitter: {property.submitter}</div>
                      <div>Submitter's appeal: {property.whyDesc}</div>
                      <div>Property cost: {property.cost}</div>
                      <div>Current votes: {propVotes}</div>
                      <div style={{ paddingTop: 8, fontWeight: 'bold' }}> 
                        <Button 
                          onClick={() => this.handlePress(property.id)} 
                          style={{ fontSize: 18, color: 'white', background: '#336713', fontWeight: 700, border: 0, borderRadius: 3, padding: '12px 24px' }}
                        >
                          Vote
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

module.exports = Vote;