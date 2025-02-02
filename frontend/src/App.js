
import {BrowserRouter,Routes,Route} from "react-router-dom";

// import for web pages
import HomePage from "./pages/HomePage";
import MainLayout from "./components/Layout/MainLayout";
import AboutUsPage from "./pages/AboutUsPage";
import LoginPage from "./pages/LoginPage";
import AllCategoryPage from './pages/AllCategoryPage';
import RegisterPage from './pages/RegisterPage';
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import PosPage from './pages/PosPage';
import Pos from './pages/Pos';



// import for dashboard 
import LayoutDas from "./components/Layout/LayoutDas";
import CategoryDas from "./pageDas/CategoryDas";
import RegisterDas from "./pageDas/RegisterDas";
import LoginDas from "./pageDas/LoginDas";
import CustomerDas from "./pageDas/CustomerDas";
import ChartDas from "./pageDas/ChartDas";
import LogoutDas from "./pageDas/LogoutDas";
import RoleDas from "./pageDas/RoleDas";
import PaymentMethodDas from "./pageDas/PaymentMethodDas";
import OrderStatusDas from "./pageDas/OrderStatusDas";
import EmployeeDas from "./pageDas/EmployeeDas";
import ProductDas from "./pageDas/ProducDas";
import ShoppingCart from "./pages/ShoppingCart";
import UserDas from "./pageDas/UserDas";
import OrderDas from "./pageDas/OrderDas";
import AdminDas from "./pageDas/AdminDas";
import LayoutDasLogin from "./components/Layout/LayoutDasLogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      {/* Route for web pages */}
        <Route element={<MainLayout/>}> 
          <Route path="/" element={<HomePage />} /> 
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/allcategory" element={<AllCategoryPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/product/:catetoryId" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
          <Route path="/pospage" element={<PosPage />} />
          <Route path="/pos" element={<Pos />} />          
        </Route>

          {/* Route for dashboards */}
        <Route path="/dashboard" element={<LayoutDas/>}> 
          <Route path="categorydas" element={<CategoryDas/>} /> 
          <Route path="customerdas" element={<CustomerDas />} />
          <Route path="chartdas" element={<ChartDas />} />
          <Route path="logoutdas" element={<LogoutDas />} />
          <Route path="role" element={<RoleDas />} />
          <Route path="payment-method" element={<PaymentMethodDas />} />
          <Route path="order-status" element={<OrderStatusDas />} />
          <Route path="employee" element={<EmployeeDas />} />
          <Route path="productdas" element={<ProductDas />} /> 
          <Route path="user" element={<UserDas />} />
          <Route path="order" element={<OrderDas />} />
          <Route path="admin" element={<AdminDas />} />
        </Route>

        {/* Route for LayoutDasLogin */}
        {/* <Route path="/layoutdaslogin" element={<LayoutDasLogin />}>
          <Route path="logindas" element={<LoginDas />} />
          <Route path="/layoutdaslogin/registerdas" element={<RegisterDas />} />
        </Route> */}

        <Route path="/layoutdaslogin" element={<LayoutDasLogin />} />
        <Route path="/registerdas" element={<RegisterDas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;







