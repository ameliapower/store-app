import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { About } from './About'


const NavigationRoutes = () => (
  <Router>
    <div>
      <nav className="navbar navbar-default">
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li><Link to="/">ABC&z</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/products">Products</Link></li>
          </ul>
        </div>
      </nav>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/products" component={Products}/>
    </div>
  </Router>
)

const Home = () => (
  <div className="container-fluid">
    <h2>Welcome to ABC&z</h2>
  </div>
)


const Products = ({ match }) => (
  <div className="container-fluid">
    <h2>Our Products</h2>
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        <li>
          <Link to={`${match.url}/Sildenafil Citrate`}>
            Sildenafil Citrate
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/Mountain Juniperus ashei`}>
            Mountain Juniperus Ashei
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/Dextromathorphan`}>
            Dextromathorphan HBr
          </Link>
        </li>
      </ul>
    </div>




    <Route path={`${match.url}/:productId`} component={Product}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a product.</h3>
    )}/>
  </div>
)

const Product = ({ match }) => (
  <div>
    <h3>{match.params.productId}</h3>
  </div>
)

export { NavigationRoutes };
