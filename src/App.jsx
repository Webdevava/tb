import "./App.css";

// import icons
import "bootstrap-icons/font/bootstrap-icons.css";
import "remixicon/fonts/remixicon.css";

// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Layout from "./components/layout/Layout";
import Loginone from "./components/Login/Loginone";
import OAuthSuccess from "./components/OAuthSuccess";
import MyState from "./context/MyState";
import Signup from "./components/Signup/Signup";
import OTPsendgmail from "./components/ForgotPasswoard/OTPsendgmail";
import PasswordNew from "./components/ForgotPasswoard/PasswordNew";
import LoginWithEmail from "./components/Login/LoginWithEmail";
import LoginWithMobile from "./components/Login/LoginWithMobile";
import OTPVerification from "./components/Login/OTPVerification";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
  Outlet,
} from "react-router-dom";

import MyDashboard from "./pages/MyDashboard";
import MyAccount from "./pages/MyAccount";
import MyJournal from "./pages/MyJournal";
import AccountabilityPartner from "./pages/AccountabilityPartner";
import PerformanceAnalytics from "./pages/PerformanceAnalytics";
import SignupOTPVerification from "./components/Signup/SignupOTPverification";

const isAuthenticated = () => {
  return JSON.parse(localStorage.getItem("isLoggedIn"));
};

const ProtectedRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
};

const AuthRoute = ({ children }) => {
  return isAuthenticated() ? <Navigate to="/mainHome" /> : children;
};

function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Navigate to={isAuthenticated() ? "/login" : "/login"} />}
          />
          <Route
            path="/login"
            element={
              <AuthRoute>
                <Loginone />
              </AuthRoute>
            }
          />
          <Route
            path="/signUp"
            element={
              <AuthRoute>
                <Signup />
              </AuthRoute>
            }
          />
          <Route
            path="/loginwithmobile"
            element={
              <AuthRoute>
                <LoginWithMobile />
              </AuthRoute>
            }
          />
          <Route
            path="/loginwithemail"
            element={
              <AuthRoute>
                <LoginWithEmail />
              </AuthRoute>
            }
          />
          <Route
            path="/otpverification"
            element={
              <AuthRoute>
                <OTPVerification />
              </AuthRoute>
            }
          />
          <Route
            path="/signupotpverification"
            element={
              <AuthRoute>
                <SignupOTPVerification />
              </AuthRoute>
            }
          />
          <Route
            path="/passwordnew"
            element={
              <AuthRoute>
                <PasswordNew />
              </AuthRoute>
            }
          />
          <Route path="/oauth-success" element={<OAuthSuccess />} />
          <Route>
            <Route path="/mainHome" element={<MyDashboard />} />
            {/* <Route path="/myDashboard" element={<MyDashboard />} /> */}
            <Route path="/myJournal" element={<MyJournal />} />

            <Route
              path="/performanceAnalytics"
              element={<PerformanceAnalytics />}
            />
            <Route
              path="/accountabilityPartner"
              element={<AccountabilityPartner />}
            />
            <Route path="/myAccount" element={<MyAccount />} />
          </Route>
          <Route path="/OTPsendgmail" element={<OTPsendgmail />} />
        </Routes>
      </Router>
    </MyState>
  );
}

export default App;
