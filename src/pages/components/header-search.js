import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function HeaderSearch(props) {
  const navigate = useNavigate();
  
  const onSubmit = e => {
    e.preventDefault();
    navigate("/search");
  };

  return (
    <Form className="d-flex" method="get" action="/search" autoComplete="off" onSubmit={onSubmit}>
      <Form.Control type="search" placeholder="제목, 재료, 카테고리 검색" value={props.keyword}  className="input-search" />
    </Form>
  );
}

export default HeaderSearch;