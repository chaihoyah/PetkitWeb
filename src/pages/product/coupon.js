import Navigation from "../components/navigation";
import { Button, Tabs, Tab } from "react-bootstrap";

import "./product.css";

function Coupon() {
  return (
    <>
    <Navigation title="할인쿠폰" />
    <div className="product-coupon-wrap">
      <section className="tab-border">
        <Tabs justify defaultActiveKey="available" id="tab-coupon" className="mb-3">
          <Tab eventKey="available" title="사용가능">
            <div className="coupon-filter">
              <Button variant="default" className>정렬<br/>(최신순, 가장 짧게 남은거 순)</Button>
            </div>
            <div className="coupon-list-item-avaiable">
              첫 손님 쿠폰<br/>
              아무거나 50% 할인!<br/>
              얼마 이상 주문시<br/>
              2021.10.01 부터<br/>
              2021.11.01 까지
            </div>
            <div className="coupon-list-item-avaiable">
              두 손님 쿠폰<br/>
              아무거나 100% 할인!<br/>
              얼마 이상 주문시<br/>
              2021.10.01 부터<br/>
              2021.11.01 까지
            </div>
          </Tab>
          <Tab eventKey="expired" title="사용 완료/만료">
            <div className="coupon-list-item-expired">
              <p>첫 손님 쿠폰<br/>
              아무거나 50% 할인!</p>

              2021.10.15 사용 완료
            </div>
            <div className="coupon-list-item-expired">
              두 손님 쿠폰<br/>
              아무거나 100% 할인!<br/>
              얼마 이상 주문시<br/>
              2021.10.01 부터<br/>
              2021.11.01 까지<br/>
              사용 기간 만료
            </div>
          </Tab>
        </Tabs>
      </section>
      
    </div>
    </>
  );
}

export default Coupon;