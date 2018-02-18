pragma solidity ^0.4.18;
// We have to specify what version of compiler this code will compile with

contract Ownable {
  address public owner;

  event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

  /**
   * @dev The Ownable constructor sets the original `owner` of the contract to the sender
   * account.
   */
  function Ownable() public {
    owner = msg.sender;
  }

  /**
   * @dev Throws if called by any account other than the owner.
   */
  modifier onlyOwner() {
    require(msg.sender == owner);
    _;
  }

  /**
   * @dev Allows the current owner to transfer control of the contract to a newOwner.
   * @param newOwner The address to transfer ownership to.
   */
  function transferOwnership(address newOwner) public onlyOwner {
    require(newOwner != address(0));
    OwnershipTransferred(owner, newOwner);
    owner = newOwner;
  }

}

contract WilderStake is Ownable {
 
	 // [people][project] = number of votes
	 mapping (address => mapping(uint => uint)) public votesPerPerson;
	 mapping (address => uint) deposits;


	 struct Project {
	  string name;
	  uint totalToRaise;
	  uint votes;
	  bool active;
	  address beneficiary;
	 }

	Project[] projects;

	function WilderStake() public { }

	function addProject(string _name, uint _totalToRaise, address _beneficiary) public {
		Project memory project = Project({
			name: _name, 
			totalToRaise: _totalToRaise, 
			votes: 0, 
			active: true,
			beneficiary: _beneficiary
		});

		projects.push(project);
	}

	function donate() public payable { 
		deposits[msg.sender] += msg.value;
	}

	function vote(uint _projectId) public payable { 
		require (_projectId < projects.length);

		Project storage project = projects[_projectId];
		require (project.totalToRaise <= this.balance);
		require (project.active);

		votesPerPerson[msg.sender][_projectId] = deposits[msg.sender];
		project.votes += deposits[msg.sender];
		deposits[msg.sender] = 0;
	}

	function totalRaised() public view returns (uint) {
		return this.balance;
	}

	function projectFunding() public view returns (uint[], bool[]) {
		uint[] memory votes = new uint[](projects.length);
		bool[] memory active = new bool[](projects.length);

		for (uint256 i = 0; i < projects.length; i++) {
			votes[i] = projects[i].votes;
			active[i] = projects[i].active;
		}

		return (votes, active);
	}

	function finalizeProject(uint _projectId) onlyOwner public {
		require (_projectId < projects.length);

		Project storage project = projects[_projectId];
		require (project.totalToRaise <= this.balance);
		require (project.active);

		project.active = false;
		project.beneficiary.transfer(project.totalToRaise);
	}
}