import {Routes, Route} from "react-router-dom";

/* Import Components */
//import Footer from "./components/footer";

/* Import Pages */
import HomePage from "./home/home";
import UserPage from "./user/user";
import UserModifyPage from "./user/modify";
import UserInfoPage from "./user/user-info";
import LoginPage from "./user/login";
import SignUpPage from "./user/signup";
import SignupProgressPage from "./user/signup-progress";

import SearchPage from "./search/search";
import SearchQueryPage from "./search/search-query";

import ProductDetailPage from "./product/detail";
import ProductOrderPage from "./product/order";
import ProductOrderProgressPage from "./product/order-progress";
import CartPage from "./product/cart";
import HistoryPage from "./product/history";
import OrderDetailPage from "./product/order-detail";
import OrderReturnPage from "./product/order-return";
import OrderReviewPage from "./product/order-review";
import CouponPage from "./product/coupon";
import LikeListPage from "./product/like-list";
import RecentViewPage from "./product/recent-view";
import TopPurchasePage from "./product/top-purchase";

import PetRegisterPage from "./pet/register";
import PetModifyPage from "./pet/modify";

import PaymentListPage from "./payment/list";
import PaymentAddPage from "./payment/add";

import ServicePage from "./service/service";

import NotFoundPage from "./not-found";

/* Import CSS */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'; // this includes also propper
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="page-wrap" id="page-wrap">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/user-modify" element={<UserModifyPage />} />
          <Route path="/user-info" element={<UserInfoPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signup-progress" element={<SignupProgressPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/search-query" element={<SearchQueryPage />} />
          <Route path="/product-detail" element={<ProductDetailPage />} />
          <Route path="/like-list" element={<LikeListPage />} />
          <Route path="/recent-view" element={<RecentViewPage />} />
          <Route path="/top-purchase" element={<TopPurchasePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/order" element={<ProductOrderPage />} />
          <Route path="/order-detail" element={<OrderDetailPage />} />
          <Route path="/order-return" element={<OrderReturnPage />} />
          <Route path="/order-review" element={<OrderReviewPage />} />
          <Route path="/coupon" element={<CouponPage />} />
          <Route path="/order-progress" element={<ProductOrderProgressPage />} />
          <Route path="/pet-register" element={<PetRegisterPage />} />
          <Route path="/pet-modify" element={<PetModifyPage />} />
          <Route path="/payment" element={<PaymentListPage />} />
          <Route path="/payment-add" element={<PaymentAddPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
