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
          <Route exact path="/" component={Mainpage} />
          <Route path="/mypage" component={Mypage} />
          <Route path="/createPost" component={CreatePost} />
          <Route path="/positive" component={Positivepage} />
          <Route path="/negative" component={Negativepage} />
          <Route path="/Allboard" component={Allboardpage} />
          <Route path="/debate" component={DebatepPage} />
          <Route path="/login" component={SignUpAndSignIn} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
export default App;
