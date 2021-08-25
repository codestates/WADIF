import "./App.css";
import Nav from "./components/Nav/Nav";
import { BrowserRouter, Route } from "react-router-dom";
import Mainpage from "./pages/Mainpage";
import Mypage from "./pages/Mypage";
import SecurityPage from "./pages/SecurityPage";

function App() {
  return (
    <>
      <Nav />
      <BrowserRouter>
        <Route exact path="/" component={Mainpage} />
        <Route path="/mypage" component={Mypage} />
        <Route path="/securitypage" component={SecurityPage} />
      </BrowserRouter>
    </>
  );
}

export default App;
