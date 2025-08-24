import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "../src/components/Body";
import Login from "../src/components/Login";
import Profile from "../src/components/Profile";
import Signup from "../src/components/Signup";
import { Provider } from "react-redux";
import appStore from "../src/utils/appStore";

function App() {
  return (
    <>
    <Provider store={appStore}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
      {/* 
      <h1 class="text-3xl font-bold">Hello world!</h1> */}
    </>
  );
}

export default App;
