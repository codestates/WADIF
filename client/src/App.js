import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Mainpage from './pages/Mainpage';
import Mypage from './pages/Mypage';
import SecurityPage from './pages/SecurityPage';
import Positivepage from './pages/Positivepage';
import Negativepage from './pages/Negativepage';
import Allboardpage from './pages/Allboardpage';
import SignUpAndSignIn from './components/SignUpAndSignIn';
import CreatePost from './components/CreatePost';
import DebatePage from './components/DebatepPage';

function App() {
  return (
    <>
      <SignUpAndSignIn></SignUpAndSignIn>
    </>
  );
}
export default App;
