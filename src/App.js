import {Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Menu from "./Components/Menu";
import Users from "./Components/Users";
import UserDetail from "./Components/UserDetail";
import UserAdd from "./Components/UserAdd";

function App() {
  return (
    <div>
      <Menu />
      <br />
      <div className="container">
        {/* <Header /><br /> */}
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/home" Component={Home} />
          <Route exact path="/about" Component={About} />
          <Route exact path="/contact" Component={Contact} />
          <Route exact path="/users" Component={Users} />
          <Route exact path="/userdetail/:id" Component={UserDetail} />
          <Route exact path="/useradd" Component={UserAdd} />
        </Routes><br />
        {/* <Footer /> */}
      </div>
    </div>  );
}

export default App;
