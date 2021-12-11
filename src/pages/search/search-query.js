import Header from "../components/header";
import HeaderSearch from "../components/header-search";
import { Link } from "react-router-dom";
import { Row, Col, ListGroup } from "react-bootstrap";

import "./search.css";

function SearchQuery() {
  return (
    <>
      <Header />
      <HeaderSearch keyword="오리" />
      <div className="search-wrap mt-4">
        <Row className="search-keyword mt-3">
          <Col xs={12}>
            <p className="search-keyword-title mb-0">“오리”가 들어간 레시피</p>
            <ListGroup as="ol" numbered className="mb-3">
              <ListGroup.Item as="li"><Link className="search-keyword-item" to="/product-detail">오리 거위</Link></ListGroup.Item>
              <ListGroup.Item as="li"><Link className="search-keyword-item" to="/product-detail">오리 거위</Link></ListGroup.Item>
              <ListGroup.Item as="li"><Link className="search-keyword-item" to="/product-detail">오리 거위</Link></ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>

        <Row className="search-keyword mt-3">
          <Col xs={12}>
            <p className="search-keyword-title mb-0">“오리” 키워드가 포함된 레시피</p>
            <ListGroup as="ol" numbered className="mb-3">
              <ListGroup.Item as="li"><Link className="search-keyword-item" to="/product-detail">오리 거위</Link></ListGroup.Item>
              <ListGroup.Item as="li"><Link className="search-keyword-item" to="/product-detail">오리 거위</Link></ListGroup.Item>
              <ListGroup.Item as="li"><Link className="search-keyword-item" to="/product-detail">오리 거위</Link></ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>

        <Row className="search-keyword mt-3">
          <Col xs={12}>
            <p className="search-keyword-title mb-0">“오리” 재료가 포함된 레시피</p>
            <ListGroup as="ol" numbered className="mb-3">
              <ListGroup.Item as="li"><Link className="search-keyword-item" to="/product-detail">오리 거위</Link></ListGroup.Item>
              <ListGroup.Item as="li"><Link className="search-keyword-item" to="/product-detail">오리 거위</Link></ListGroup.Item>
              <ListGroup.Item as="li"><Link className="search-keyword-item" to="/product-detail">오리 거위</Link></ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default SearchQuery;