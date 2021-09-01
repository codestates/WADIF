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
import axios from 'axios';

function App() {
  const [show, setShow] = useState(false);
  const [userInfo, setUserInfo] = useState({});
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
      axios
        .post(signOutUrl, {}, config)
        .then((response) => {
          history.push('/');
        })
        .catch((err) => console.log(err));
    }
    setShow(false);
  };

  const handleUserInfo = (infoData) => {
    setUserInfo(infoData);
  };
  const handleAccessToken = (e) => {
    return setAccessToken(e);
  };

  useEffect(async () => {
    const seeMyPost = await axios.get('https://localhost:4000/users/posts', {
      headers: {
        authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });
  }, []);

  return (
    <>
      <Switch>
        <Route exact path="/">
          <SignUpAndSignIn
            history={history}
            setAccessToken={handleAccessToken}
            setUserInfo={handleUserInfo}
          />
        </Route>
        <Route path="/mypage">
          <Mypage />
        </Route>
        <Route path="/createPost">
          <CreatePost accessToken={accessToken} />
        </Route>
        <Route path="/positive">
          <Positivepage />
        </Route>
        <Route path="/negative">
          <Negativepage />
        </Route>
        <Route path="/allboard">
          <Allboardpage accessToken={accessToken} />
        </Route>
        <Route path="/debate">
          <DebatepPage userInfo={userInfo} accessToken={accessToken} />
        </Route>
        <Route path="/mainpage">
          <Mainpage
            handleModalOpen={handleModalOpen}
            accessToken={accessToken}
          />
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
