import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Bollywood from "./pages/Bollywood";
import Fitness from "./pages/Fitness";
import Food from "./pages/Food";
import Hollywood from "./pages/Hollywood";
import HomePage from "./pages/HomePage";
import Technology from "./pages/Technology";
import Details from "./components/Details";
import "./App.css";
import ReadMorePage from "./pages/ReadMorePage";

function App() {
  return (
    <div className="App">
      <Details>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/bollywood" element={<Bollywood />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/hollywood" element={<Hollywood />} />
            <Route path="/fitness" element={<Fitness />} />
            <Route path="/food" element={<Food />} />
            <Route path=":categoryid/article/:articleId" element = {<ReadMorePage/>} />
          </Routes>
        </BrowserRouter>
      </Details>
    </div>
  );
}

export default App;
