const React = require('react');
const { Link } = require('react-router-dom');

const items = [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'About',
    url: '/about',
  },
  {
    name: 'Contribute',
    url: '/contribute',
  },
  {
    name: 'Vote',
    url: '/vote',
  },
]

const Header = function() {
  return (
    <div style={{ background: 'white', zIndex: 200, height: 42, width: '100%', borderBottomStyle: 'solid', borderBottomColor: '#ddd', borderBottomWidth: 1, position: 'fixed' }}>
      <div style={{ display: 'inline-block' }}>
        <img alt="" style={{ width: 41, height: 41 }} src="https://cdn.glitch.com/471debc4-30c7-4d8b-8218-7591bd219e08%2Flogo.png?1518851333557" />
      </div>
      <div style={{ display: 'inline-block', float: 'right', paddingTop: 10 }}>
        {items.map((item, i) => (
          <span style={{ fontSize: 15, paddingRight: 12 }} key={i}>
            <Link style={{ color: '#333' }} to={item.url}>{item.name}</Link>
          </span>
        ))}
      </div>
    </div>
  );
}

module.exports = Header;