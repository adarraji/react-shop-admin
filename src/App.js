import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import List from './pages/List';
import SinglePage from './pages/SinglePage';
import NewPage from './pages/NewPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { userInputs, productInputs } from "./formSource";
import { useSelector } from 'react-redux';

function App() {
  const admin = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.isAdmin
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        {admin && (
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<SinglePage />} />
              <Route path="new" element={<NewPage inputs={userInputs} title="Add New User" />} />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<SinglePage />} />
              <Route path="new" element={<NewPage inputs={productInputs} title="Add New Product" />} />
            </Route>
          </Route>
        )
        }
      </Routes>
    </Router>
  );
}

export default App;
