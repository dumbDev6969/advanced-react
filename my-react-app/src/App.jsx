
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

function App() {
  const [selected, setSelected] = useState("");

  return (
    <>
      <div className="App">
        <h2>How did you hear about Little Lemon?</h2>
        <RadioGroup onChange={setSelected} selected={selected}>
          <RadioOption value="social_media">Social Media</RadioOption>
          <RadioOption value="friends">Friends</RadioOption>
          <RadioOption value="advertising">Advertising</RadioOption>
          <RadioOption value="other">Other</RadioOption>
        </RadioGroup>
        <button disabled={!selected}>Submit</button>
      </div>
    </>
  )
}

export default App
