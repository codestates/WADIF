import './App.css';
import { useState, useEffect } from 'react';
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
import Introducion from './pages/IntroducePage';
import axios from 'axios';

function App() {
  const [show, setShow] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [accessToken, setAccessToken] = useState(null);
  const history = useHistory();

  const handleModalOpen = () => {
    setShow(true);
  };

  const handleModalClose = async (e) => {
    const currentClass = e.target.className;

    if (currentClass === 'yesBx' || currentClass === 'yes') {
      const signOutUrl = 'https://localhost:4000/users/signout';
      const config = {
        headers: { authorization: `Bearer ${accessToken}` },
      };
      console.log(accessToken);
      console.log('5');
      try {
        const response = await axios.post(signOutUrl, {}, config);
        history.push('/login'); //나중에 소개페이지 history push
      } catch (err) {
        console.log(err);
        handleServerErr();
      }
    } else if (currentClass === 'modal-card' || currentClass === 'askLogout') {
      return;
    }
    setShow(false);
  };

  const handleServerErr = () => {
    setAccessToken(null);
    history.push('/notfound');
  };

  const handleLogOut = () => {
    setAccessToken(null);
    history.push('/');
  };

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Introducion />
        </Route>
        <Route path="/mainpage">
          <Mainpage
            handleLogOut={handleLogOut}
            handleServerErr={handleServerErr}
            handleModalOpen={handleModalOpen}
            accessToken={accessToken}
            history={history}
          />
        </Route>
        <Route path="/mypage">
          <Mypage handleModalOpen={handleModalOpen} />
        </Route>
        <Route path="/createPost">
          <CreatePost
            handleModalOpen={handleModalOpen}
            history={history}
            accessToken={accessToken}
          />
        </Route>
        <Route path="/positive">
          <Positivepage handleModalOpen={handleModalOpen} />
        </Route>
        <Route path="/negative">
          <Negativepage handleModalOpen={handleModalOpen} />
        </Route>
        <Route path="/allboard">
          <Allboardpage
            handleModalOpen={handleModalOpen}
            accessToken={accessToken}
          />
        </Route>
        <Route path="/debate">
          <DebatepPage
            handleModalOpen={handleModalOpen}
            accessToken={accessToken}
          />
        </Route>
        <Route path="/login">
          <SignUpAndSignIn history={history} setAccessToken={setAccessToken} />
        </Route>
        <Route path="/notfound">
          <NotFound />
        </Route>
      </Switch>
      <LogOutModal
        show={show}
        accessToken={accessToken}
        handleModalClose={handleModalClose}
      ></LogOutModal>
    </>
  );
}

export default withRouter(App);
