import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/authentication/LoginPage";
import SignUpStraverPage from "./pages/authentication/SignUpStraverPage";
import { ApplicationConstants } from "./contants/ApplicationConstants";
import SignUpOrganizationPage from "./pages/authentication/SignUpOrganizationPage";
import SignUpOptionPage from "./pages/SignUpOptionPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={ApplicationConstants.ROUTE_LANDING}>
            <Route index element={<LandingPage />} />
            <Route
              path={ApplicationConstants.ROUTE_LOGIN}
              element={<LoginPage />}
            />
            <Route
              path={ApplicationConstants.ROUTE_SIGNUP_AS_STRAVER}
              element={<SignUpStraverPage />}
            />
            <Route
              path={ApplicationConstants.ROUTE_SIGNUP_AS_ORGANIZATION}
              element={<SignUpOrganizationPage />}
            />
            <Route
              path={ApplicationConstants.ROUTE_SIGNUP_AS}
              element={<SignUpOptionPage />}
            />
            <Route
              path="*"
              element={
                <>
                  <p>Not found</p>
                </>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
