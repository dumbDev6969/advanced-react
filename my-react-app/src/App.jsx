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

function App() {
  return (
    <>
      <Alert>
        <h1>Delete account</h1>
        <p>Are you sure you want to delete your account?</p>
        <DeleteButton backgroundColor="red">Delete</DeleteButton>
      </Alert>
    </>
  )
}

export default App
