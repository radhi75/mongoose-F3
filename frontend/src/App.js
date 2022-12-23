import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import List from "./Components/List";
import Navigation from "./Components/Navigation";
import { get_users } from "./redux/Action/UserAction";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_users());
  }, [dispatch]);
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </div>
  );
}

export default App;
