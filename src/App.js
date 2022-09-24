import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import UserList from './pages/UserList';
import ProductList from './pages/ProductList';
import SinglePage from './pages/SinglePage';
import NewPage from './pages/NewPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { userInputs } from "./formSource";
import Product from './pages/Product';
import ProductNew from './pages/ProductNew';

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
              <Route index element={<UserList />} />
              <Route path=":userId" element={<SinglePage />} />
              <Route path="new" element={<NewPage inputs={userInputs} title="Add New User" />} />
            </Route>
            <Route path="products">
              <Route index element={<ProductList />} />
              <Route path=":productId" element={<Product />} />
              <Route path="new" element={<ProductNew />} />
            </Route>
          </Route>
        )
        }
      </Routes>
    </Router>
  );
}

export default App;
