import Navigation from "../components/navigation";
import { Link } from "react-router-dom";
import { Row, Col, Button, Image } from "react-bootstrap";

import "./product.css";

function RecentView() {
  return (
    <>
      <Navigation title="최근 본 상품" />
      <div className="recent-view-wrap">
        <section className="recent-view-list">

          <p className="mb-1">2021. 10. 25</p>
          <div className="recent-view-item">
            <Link to="/product-detail">
              <Row>
                <Col xs={6}><Image src="images/products/product-1.png" className="img-fluid" alt="Product title" /></Col>
                <Col xs={6}>
                  <p className="mb-0">닭가슴살 브로콜리 고구마 도우 크랜베리 피자</p>
                  <p className="mb-0">16,000원</p>
                </Col>
              </Row>
            </Link>
          </div>
          <Button className="w-100 border-top no-rounded" size="lg">
            <Image src="images/cart-medium-icon.png" /><br/>
            장바구니 추가
          </Button>
        </section>
      </div>
    </>
  );
}

export default RecentView;


