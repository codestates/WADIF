import './App.css';
import Nav from './components/Nav/Nav';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Mainpage from './pages/Mainpage';
import Mypage from './pages/Mypage';
import Positivepage from './pages/Positivepage';
import Negativepage from './pages/Negativepage';
import SignUpAndSignIn from './pages/SignUpAndSignIn';
import CreatePost from './pages/CreatePost';
import Allboardpage from './pages/Allboardpage';
import DebatepPage from './pages/DebatepPage';
import NotFound from './LodingPlaceHolder/404NotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Mainpage />
          </Route>
          <Route path="/mypage">
            <Mypage />
          </Route>
          <Route path="/createPost">
            <CreatePost />
          </Route>
          <Route path="/positive">
            <Positivepage />
          </Route>
          <Route path="/negative">
            <Negativepage />
          </Route>
          <Route path="/Allboard">
            <Allboardpage />
          </Route>
          <Route path="/debate">
            <DebatepPage />
          </Route>
          <Route path="/login">
            <SignUpAndSignIn />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
export default App;
