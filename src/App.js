//imported file
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider";
import AddingServices from "./Pages/AddingServices/AddingServices";
import Home from "./Pages/Home/Home/Home";
import ManageOrders from "./Pages/ManageOrders/ManageOrders";
import MyOrders from "./Pages/MyOrders/MyOrders";
import NotFound from "./Pages/NotFound/NotFound";
import Review from "./Pages/Review/Review";
import Footer from "./Pages/Shared/Footer/Footer";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import Login from "./Pages/UserAuthorize/Login/Login";
import PrivateRoute from "./Pages/UserAuthorize/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/review/:serviceId">
              <Review></Review>
            </PrivateRoute>
            <PrivateRoute exact path="/my-orders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute exact path="/manage-all-orders">
              <ManageOrders></ManageOrders>
            </PrivateRoute>
            <PrivateRoute exact path="/add-a-service">
              <AddingServices></AddingServices>
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
