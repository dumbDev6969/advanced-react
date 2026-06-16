
import ControlledComponent from "./components/ControlledComponent";
import Form from "./components/FeedbackForm";
import Register from "./components/PracticeForm";
import Welcome from "./pages/WelcomePage";
import GiftCard from "./components/ManagingState";
import UseEffect from "./components/UseEffect";
import FetchPost from "./components/Fetch";
import CustomHook from "./components/CustomHook";
import Alert from "./components/containmentAndSpecialization/Alert";
import DeleteButton from "./components/containmentAndSpecialization/DeleteButton";
import { RadioGroup, RadioOption } from "./components/radio/index";
import { useState } from "react";
import LoginButton from "./components/spreadOperatot/LoginButton";
import Button from "./components/spreadOperatot/Button";

function App() {
  const [selected, setSelected] = useState("");

  return (
    <>
      <LoginButton backgroundColor="secondary">Login</LoginButton>
      <Button backgroundColor="primary" onClick={() => alert('Sign up')}>Sign up</Button>
    </>
  )
}

export default App
