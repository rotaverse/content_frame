import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import SideDrawer from "./components/SideDrawer";
import Backdrop from "./components/Backdrop";

// Screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import GallHomeScreen from "./screens/GalleryScreen"; // Gallery Home
import MyGallScreen from "./screens/MyGalleryScreen"; // Gallery Product Screen
import EditScreen from "./screens/EditScreen"; // Editor for Modules


function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main className="app">
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
          <Route exact path="/gallhome" component={GallHomeScreen} />
          <Route exact path="/gallproduct/:id" component={MyGallScreen} />
          <Route exact path="/edit/:id" component={EditScreen} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
