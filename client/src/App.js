import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Mainpage from './pages/Mainpage';
import Mypage from './pages/Mypage';
import Positivepage from './pages/Positivepage';
import Negativepage from './pages/Negativepage';
import Allboardpage from './pages/Allboardpage';
import SignUpAndSignIn from './components/SignUpAndSignIn';
import CreatePost from './components/CreatePost';

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
          <Route path="/login" component={SignUpAndSignIn} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
export default App;
