import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import Register from "./pages/Register";
import Explore from "./pages/Explore";
import MyList from "./pages/MyList";
import Login from "./pages/Login";
import FoodPage from "./pages/FoodPage";
import "./styling/main.scss";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/myList" element={<MyList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/foods/:foodId" element={<FoodPage />} />
        {/* <Route path="/myList/:foodId/:userId" /> */}
      </Routes>
    </div>
  );
};

export default App;
