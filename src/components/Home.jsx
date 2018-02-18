const { BrowserRouter, Route } = require('react-router-dom');

const React = require('react');
const Header = require('./Header');
const HomeContent = require('./HomeContent');
const Contribute = require('./Contribute');
const Submit = require('./Submit.jsx');
const Vote = require('./Vote');
const About = require('./About');

/* the main page for the index route of this app */
const Home = function({ votes, donateHandler, voteHandler, propSubmitHandler, wilderPoll }) { 
  const MySubmitPage = () => {
    return (
      <Submit submitProp={propSubmitHandler} />
    );
  }

  const MyVotePage = () => {
    return (
      <Vote votes={votes} voteHandler={voteHandler} />
    );
  }

  const MyContributePage = () => {
    return (
      <Contribute donateHandler={donateHandler} />
    );
  }

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div style={{ paddingTop: 50 }}>
          <Route exact path="/" component={HomeContent} />
          <Route path="/about" component={About} />
          <Route path="/contribute" render={MyContributePage} />
          <Route path="/submit" render={MySubmitPage} />
          <Route path="/vote" render={MyVotePage} />
        </div>
      </div>
    </BrowserRouter>
  );
}

module.exports = Home;