import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import UserList from './pages/UserList';
import ProductList from './pages/ProductList';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from './pages/Product';
import ProductNew from './pages/ProductNew';
import User from './pages/User';
import UserNew from './pages/UserNew';
import { useSelector } from "react-redux";

function App() {
  const admin = useSelector(state => state.user.isAdmin);
  return (
    <Router>
      <Routes>
        {!admin && (
          <Route path="/">
            <Route index element={<Login />} />
            <Route path="/login" element={<Login />} />
          </Route>
        )

        }
        {admin && (
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="users">
              <Route index element={<UserList />} />
              <Route path=":userId" element={<User />} />
              <Route path="new" element={<UserNew />} />
            </Route>
            <Route path="products">
              <Route index element={<ProductList />} />
              <Route path=":productId" element={<Product />} />
              <Route path="new" element={<ProductNew />} />
            </Route>
            <Route path="/login" element={<Login />} />
          </Route>
        )
        }
      </Routes>
    </Router>
  );
}

export default App;
