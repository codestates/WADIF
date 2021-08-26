import "./App.css";
import Nav from "./components/Nav/Nav";
import { BrowserRouter, Route } from "react-router-dom";
import Mainpage from "./pages/Mainpage";
import Mypage from "./pages/Mypage";
import SecurityPage from "./pages/SecurityPage";
import Positivepage from "./pages/Positivepage";
import Negativepage from "./pages/Negativepage";
import Allboardpage from "./pages/Allboardpage";

function App() {
  return (
    <>
      <Nav />
      <BrowserRouter>
        <Route exact path="/" component={Mainpage} />
        <Route path="/mypage" component={Mypage} />
        <Route path="/securitypage" component={SecurityPage} />
        <Route path="/positive" component={Positivepage} />
        <Route path="/negative" component={Negativepage} />
        <Route path="/Allboard" component={Allboardpage} />
      </BrowserRouter>
    </>
  );
}

export default App;
