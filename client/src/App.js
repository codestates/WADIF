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
import DebatePage from './pages/DebatePage';
import NotFound from './LodingPlaceHolder/404NotFound';
import LogOutModal from './components/Nav/LogOutModal';
import Introducion from './pages/IntroducePage';
import axios from 'axios';

function App() {
  const [show, setShow] = useState(false);
  const history = useHistory();

  const handleModalOpen = () => {
    setShow(true);
  };

  const handleModalClose = async (e) => {
    const currentClass = e.target.className;

    if (currentClass === 'yesBx' || currentClass === 'yes') {
      const signOutUrl = `${process.env.REACT_APP_API_URL}/users/signout`;
      try {
        const response = await axios.post(signOutUrl);
        history.push('/'); //나중에 소개페이지 history push
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
    history.push('/notfound');
  };

  const handleLogOut = () => {
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
            history={history}
          />
        </Route>
        <Route path="/mypage">
          <Mypage handleModalOpen={handleModalOpen} />
        </Route>
        <Route path="/createPost">
          <CreatePost handleModalOpen={handleModalOpen} history={history} />
        </Route>
        <Route path="/positive">
          <Positivepage handleModalOpen={handleModalOpen} />
        </Route>
        <Route path="/negative">
          <Negativepage handleModalOpen={handleModalOpen} />
        </Route>
        <Route path="/allboard">
          <Allboardpage handleModalOpen={handleModalOpen} />
        </Route>
        <Route path="/debate">
          <DebatePage handleModalOpen={handleModalOpen} />
        </Route>
        <Route path="/login">
          <SignUpAndSignIn history={history} />
        </Route>
        <Route path="/notfound">
          <NotFound />
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
