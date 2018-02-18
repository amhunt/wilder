const React = require('react');
const Explanation = require('./Explanation');
const Story = require('./Story');

const About = function() {
  return (
    <div>
      <Story/>
      <div className="container">
      	<h3> How it works: </h3>
      </div>
      <Explanation/>
    </div>
  );
}

module.exports = About;