import "./App.css";
import Header from "./components/Header/Header.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;
