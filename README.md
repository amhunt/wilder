# WilderStake
Preservation is Live! http://wilderstake.glitch.me/

## Inspiration
**Joseph Schiarizzi, team member:**  I recently hiked 500 miles on the Appalachian Trail. During my trek, I saw a piece of land next to the trail in Maine that was for sale. I wanted to buy this plot to preserve it, as I knew the property was at risk of being sold to logging companies. I couldn't completely afford the land myself and failed to successfully crowd-source the funds from Kickstarter and strangers on Reddit. Part of the problem was that strangers, even those interested in preservation in Maine, were unwilling to trust me, a stranger, to pool together the funds and actually purchase the land and protect in with a trust. I tried to donate $500 to an existing Land Trust and asked that they consider buying this plot in Maine that I cared about, but they already have a list of properties they will buy next and I as a low-level donor had no influence over their decisions. Unfortunately, that land was purchased by a logging company a few months later.

Here's how the existing incentive structure failed to meet everyone's needs:

1. The trust missed out because I didn't donate to them.  (This makes sense: Keeping track of lots of small donations and giving donors the chance to vote on what land to buy would be logistical nightmare. A simple DAO using Ethereum makes this efficient and affordable.)

2. I wasn't able to protect the land I wanted to because it was hard/impossible to find like-minded people who would trust me.

3. Others who wanted to protect this land as well but did not have sufficient funds did not get what they wanted.

Here's how we can help: **By pooling together funds from interested parties and voting on properties to purchase and protect, we enable even small donors to influence the direction of the trust and protect the land they care about.**

## Wilderstake

1. Redeem ETH for Leaves, WilderStake's voting token
Leaves are the native token of WilderStake and allow you to participate in votes to preserve plots of land that you care about.

2. Vote on land to preserve
You can vote on existing submissions of land-at-risk, or submit your own. When you put a leaf towards an active sale, you will be given a tax receipt in USD. If the buy is not possible, you'll get your Leaves back

3. We'll take care of the rest
WilderStake completes the buy orders and adds the land to a 100 year trust.


## How we built it

We built a DAO with our own Solidity voting/token contract. We then built a React app on a Node server.

## Challenges

There was a lot of documentation issues with the Arc library we were trying to use.  The existing DAO structures were not modular enough for us to use them as is, so we created our own contract instead. This ended up being the best option because our logic didn't need to be too complex.

## What's next for WilderStake - Wilderness preservation 

 - Better governance structure (voting on more than plots of land) 
 - More robust voting system
 - Set up a 501(c)3 land trust that will contractually hold the land for a specified number of years
