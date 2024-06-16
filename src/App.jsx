import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResumePage from "./pages/resumePage";
import SignUpPage from "./pages/signUp";
import SignInPage from "./pages/signIn";
import InfoPage from "./pages/infoPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/resumePage" element={<ResumePage />} />
          <Route path="/signUpPage" element={<SignUpPage />} />
          <Route path="/signInPage" element={<SignInPage />} />
          <Route path="/infoPage" element={<InfoPage />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
