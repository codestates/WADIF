import "./App.css";
import styled from "styled-components";
import { Scales } from "@styled-icons/remix-fill/Scales";
function App() {
  const Scale = styled(Scales)`
    color: red;
    width: 5em;
  `;
  return <Scale></Scale>;
}

export default App;
