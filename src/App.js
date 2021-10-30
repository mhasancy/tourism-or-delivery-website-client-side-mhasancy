//imported file
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider";
import AddingTourPlan from "./Pages/AddingTourPlan/AddingTourPlan";
import Home from "./Pages/Home/Home/Home";
import ManageBookings from "./Pages/ManageBookings/ManageBookings";
import MyBookings from "./Pages/MyBookings/MyBookings";
import NotFound from "./Pages/NotFound/NotFound";
import ReviewBooking from "./Pages/ReviewBooking/ReviewBooking";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import Login from "./Pages/UserAuthorize/Login/Login";
import PrivateRoute from "./Pages/UserAuthorize/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/review-booking/:serviceId">
              <ReviewBooking></ReviewBooking>
            </PrivateRoute>
            <PrivateRoute exact path="/my-bookings">
              <MyBookings></MyBookings>
            </PrivateRoute>
            <PrivateRoute exact path="/manage-bookings">
              <ManageBookings></ManageBookings>
            </PrivateRoute>
            <PrivateRoute exact path="/adding-tour-plan">
              <AddingTourPlan></AddingTourPlan>
            </PrivateRoute>

            <Route exact path="/login">
              <Login></Login>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
