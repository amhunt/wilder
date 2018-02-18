const React = require('react');
const Explanation = require('./Explanation');

/* the main page for the index route of this app */
const HomeContent = function() {
  return (
    <div>
      <div className="container">
        <div style={{ textAlign: 'center' }} className="row">
          <div className="col-sm-5">
            <h1 style={{ fontWeight: 700, fontFamily: '\'Roboto Mono\', monospace', paddingTop: 22, color: '#336713' }}>
              WilderStake
            </h1>
            <h2 className="bold">
              Conservation, Together
            </h2>
            <p style={{ paddingTop: 12, fontSize: 18, fontFamily: '\'Roboto\', sans-serif' , fontWeight: 200}}>
              We help people crowd-source funds for buying land and guarantee it ends up in our public trust.  
              By giving donaters influence over which pieces of land are bought, we empower people to preserve the wilderness that means the most to them.
            </p>
          </div>
          <div className="col-sm-7">
            <img alt="" style={{ width: 500, maxWidth: '100%', paddingTop: 12 }} src="https://cdn.glitch.com/471debc4-30c7-4d8b-8218-7591bd219e08%2Fsergei-akulich-47326.jpg?1518850404671" />
          </div>
        </div>
      </div>
      <Explanation />
    </div>
  );
}

module.exports = HomeContent;