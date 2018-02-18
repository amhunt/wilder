const React = require('react');

/* the main page for the index route of this app */
const Estimate = function({ timeRemaining }) {
  return (
    <div style={{ paddingTop: 14 }}>
      There's an estimated {timeRemaining.days() && `${timeRemaining.days()} days & `}{`${timeRemaining.hours()} hours`} until the next land purchase.
    </div>
  );
}

module.exports = Estimate;


          