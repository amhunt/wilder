const React = require("react");
const { Button } = require("react-bootstrap");

/* the main page for the index route of this app */
class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      voted: false
    };

    this.handlePress = this.handlePress.bind(this);
  }

  handlePress() {
    const { voteHandler, selectedProp } = this.props;
    
    voteHandler(selectedProp);

    this.setState({ voted: true });
  }

  render() {
    const { voted } = this.state;

    const { closeModal } = this.props;

    return (
      <div
        style={{
          borderStyle: "solid",
          borderColor: "#ddd",
          background: "white",
          height: 300,
          width: "50%",
          minWidth: 350,
          position: "fixed",
          zIndex: 2,
          left: "50%",
          transform: "translateX(-50%)"
        }}
      >
        <div style={{ padding: 48 }}>
          <h3>
            {voted
              ? "Thanks for contributing!"
              : "You'd like to vote with all of your leaves for this property to be purchased and protected?"}
          </h3>
          {!voted && (
            <div style={{ display: 'inline-block', paddingTop: 12 }}>
              <Button
                onClick={this.handlePress}
                style={{
                  fontSize: 18,
                  color: "white",
                  background: "#336713",
                  fontWeight: 700,
                  border: 0,
                  borderRadius: 3,
                  padding: "12px 24px"
                }}
              >
                Confirm vote
              </Button>
            </div>
          )}
          <div style={{ display: 'inline-block', paddingTop: 12 }}>
            <Button
              onClick={closeModal}
              style={{
                fontSize: 18,
                color: voted ? "white" : "black",
                background: voted ? "#336713" : "#fff",
                fontWeight: 700,
                border: voted ? 0 : 1,
                borderRadius: 3,
                padding: "12px 24px"
              }}
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Modal;
