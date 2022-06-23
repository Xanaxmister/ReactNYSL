import './App.css';
import { Link, Route, Switch, Routes } from "react-router-dom";

const Home = (props) => {
  console.log(props);

  return (
    <div>
      <h2>Home</h2>
    </div>
  );
};


const Category = () => (
  <div>
    <h2>Category</h2>
  </div>
);

const Products = () => (
  <div>
    <h2>Products</h2>
  </div>
);

function App() {



  return (
    <div>
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>

      { /* Route components are rendered if the path prop matches the current URL */}
      <Routes>
      <Route path="/"><Home /></Route>
      <Route path="/category"><Category /></Route>
      <Route exact path="/products"><Products /></Route>
      </Routes>
    </div>
  );
}

export default App;
