import Header from "../components/header";
import HeaderSearch from "../components/header-search";
import { Link } from "react-router-dom";
import { Row, Col, ListGroup } from "react-bootstrap";

import "./search.css";

function Search() {

  const categories = [
    {id: 1, value: '#스틱'},
    {id: 2, value: '#쿠키'},
    {id: 3, value: '#빵'},
    {id: 4, value: '#사탕'},
    {id: 5, value: '#사탕'},
    {id: 6, value: '#디저트'},
    {id: 7, value: '#디저트'},
    {id: 8, value: '#디저트'},
    {id: 9, value: '#디저트'},
    {id: 10, value: '#디저트'},
    {id: 11, value: '#사탕'}
  ];

  const rankings = [
    {
      id: 1,
      title: "레시피",
      value: [
        { id: 1, title: '멍치킨'},
        { id: 2, title: '멍치킨'},
        { id: 3, title: '멍치킨'}
      ]
    },
    {
      id: 2,
      title: "재료",
      value: [
        { id: 1, title: '닭안심'},
        { id: 2, title: '소고기'},
        { id: 3, title: '오리고기'}
      ]
    },
    {
      id: 3,
      title: "카테고리",
      value: [
        { id: 1, title: '디저트'},
        { id: 2, title: '쿠키'},
        { id: 3, title: '빵'}
      ]
    },
    {
      id: 4,
      title: "최근 검색어",
      value: [
        { id: 1, title: '멍치킨'},
        { id: 2, title: '음치킨'},
        { id: 3, title: '냥치킨'},
        { id: 4, title: '옹치킨'},
        { id: 5, title: '뿡치킨'}
      ]
    }
  ]
  
  return (
    <>
      <Header />
      <HeaderSearch />
      <div className="search-wrap mt-4">

        <Row className="search-category">
          <Col xs={12}>
            <p className="mb-0">카테고리 검색</p>
            {categories.map((cat, index) => <Link to="/search-query" className="category-item" key={index}>{cat.value}</Link>)}
          </Col>
        </Row>

        <Row className="search-ranking mt-3">
          <Col xs={12}>
            <p className="">검색어 Ranking</p>
          </Col>

          {rankings.map((item, pIndex) => 
          <Col xs="4" key={pIndex}>
            <p className="mb-0">{item.title}</p>
            <ListGroup as="ol" numbered className="mb-3">
              {item.value.map((sItem, index) => 
              <ListGroup.Item as="li" key={index}><Link className="search-keyword-item" to="/search-query">{sItem.title}</Link></ListGroup.Item>
              )}
            </ListGroup>
          </Col>
          )}
        </Row>
      </div>
    </>
  );
}

export default Search;