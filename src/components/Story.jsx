const React = require('react');

const Story = function(){
  
 return(
     <div style={{ paddingTop: 20 }} className="container">
        <div style={{ padding: '0 15px' }} className="row">
          <h3 style={{ paddingBottom: 12 }}> Why we started: </h3>
          <p style={{ fontSize: 18, fontStyle: 'italic' }}>
            I recently hiked 500 miles on the Appalachian Trail and wanted to buy a piece of land that was for sale next to the trail in the wilderness in Maine to preserve it. I couldn\'t afford the land and failed crowd sourcing, kickstarter, and asking for money to buy it because people don't want to donate so that I can buy land for myself. I tried offering to donate $500 to an existing Land Trust and asking that they buy the wilderness in Maine I liked, but they already have a list of properties they will buy next and I had no influence over their decisions. That land was purchased buy a logging company a few months later.
          </p>
          <p style={{ fontSize: 18, fontStyle: 'italic' }}>
            I'm sad because that land will probably be logged soon. The trust is disappointer that I didn't donate to them. Keeping track of lots of small donations and giving donors the chance to vote on what land to buy would be a logistical nightmare. A DAO using ethereum makes this easy.
          </p>
          <div style={{ textAlign: 'right', width: '100%' }}>
            <p style={{ fontSize: 18, fontWeight: 700 }}> - Joseph, co-founder </p>   
          </div>
        </div>
      </div>
   );
}

module.exports = Story;