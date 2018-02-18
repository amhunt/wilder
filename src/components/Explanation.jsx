const React = require('react');

const explanationPoints = [
  {
    title: '1. Redeem ETH for leaves',
    description: 'Leaves are the native token of WilderStake and allow you to participate in votes to preserve specific plots of land.'
  },
  {
    title: '2. Vote on land to preserve',
    description: 'Choose a particular plot of land help preserve. When you put a leaf towards an active sale you will be given a tax receipt at the conversion rate of leaves to USD at the time of use. If the buy is not possible, you\'ll get your Eth back!'
  },
  {
    title: '3. We\'ll take care of the rest',
    description: 'WilderStake complete the buy orders and add the land to a trust. As a holder of leaves you are entitled to take part in the governance of the trust.'
  },
];

/* takes an array prop 'items' and returns a <ul> element 
   with each item as <li> elements */
const Explanation = function() {
  return (
    <div style={{ paddingTop: 28 }} className="container">
      <div className="row">
        {explanationPoints.map(point => (
          <div key={point.title} className="col-sm-4">
            <div style={{ paddingTop: 12, fontWeight: 'bold', fontSize: 18 }}>{point.title}</div>
            <hr />
            <div style={{ paddingTop: 4, fontSize: 18, fontWeight: 300 }}>{point.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

module.exports = Explanation;