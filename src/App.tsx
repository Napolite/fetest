import "./App.css";
import NavBar from "./components/navbar";
import SideBar from "./components/sidebar";
import Main from "./screen";

function App() {
  return (
    <>
      <NavBar />
      <div className="main">
        <SideBar />
        <Main />
      </div>
    </>
  );
}

export default App;
