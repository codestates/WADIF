import './App.css';
import { useState, useEffect } from 'react';
import Nav from './components/Nav/Nav';
import {
  BrowserRouter,
  Route,
  Switch,
  useHistory,
  withRouter,
} from 'react-router-dom';
import Mainpage from './pages/Mainpage';
import Mypage from './pages/Mypage';
import Positivepage from './pages/Positivepage';
import Negativepage from './pages/Negativepage';
import SignUpAndSignIn from './pages/SignUpAndSignIn';
import CreatePost from './pages/CreatePost';
import Allboardpage from './pages/Allboardpage';
import DebatepPage from './pages/DebatepPage';
import NotFound from './LodingPlaceHolder/404NotFound';
import LogOutModal from './components/Nav/LogOutModal';
import axios from 'axios';

function App() {
  const [show, setShow] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const history = useHistory();

  const handleModalOpen = () => {
    setShow(true);
  };

  const handleModalClose = (e) => {
    const currentClass = e.target.className;

    if (currentClass === 'yesBx' || currentClass === 'yes') {
      const signOutUrl = 'https://localhost:4000/users/signout';
      const config = {
        headers: { authorization: `Bearer ${accessToken}` },
      };
      console.log(accessToken);
      console.log('5');
      axios
        .post(signOutUrl, {}, config)
        .then((response) => {
          console.log('hello');
          console.log(response);
          history.push('/login');
        })
        .catch((err) => console.log(err));
    }
    setShow(false);
  };

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Mainpage
            handleModalOpen={handleModalOpen}
            accessToken={accessToken}
          />
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
        <Route path="/allboard">
          <Allboardpage />
        </Route>
        <Route path="/debate">
          <DebatepPage />
        </Route>
        <Route path="/login">
          <SignUpAndSignIn history={history} setAccessToken={setAccessToken} />
        </Route>
      </Switch>
      <LogOutModal
        show={show}
        handleModalClose={handleModalClose}
      ></LogOutModal>
    </>
  );
}

export default withRouter(App);
