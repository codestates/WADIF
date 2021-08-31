import './App.css';
import { useState, useEffect } from 'react';
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
import LogOutModal from './components/Nav/LogOutModal';

function App() {
  const [show, setShow] = useState(false);

  const handleModalOpen = () => {
    setShow(true);
  };

  const handleModalClose = (e) => {
    const currentClass = e.target.className;

    if (currentClass === 'yesBx' || currentClass === 'yes') {
      // axios logout 요청
    }
    setShow(false);
  };

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Mainpage handleModalOpen={handleModalOpen} />
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
      <LogOutModal
        show={show}
        handleModalClose={handleModalClose}
      ></LogOutModal>
    </>
  );
}
export default App;
