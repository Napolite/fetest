import "./App.css";
import NavBar from "./components/navbar";
import SideBar from "./components/sidebar";
import Main from "./screen";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="main">
        <SideBar />
        <Main />
      </div>
    </div>
  );
}

export default App;
