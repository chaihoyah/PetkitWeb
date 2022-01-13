import { useState} from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card} from "react-bootstrap";
import UserRating from "../components/user-rate";

function MainProduct(props) {

  function makeWonString(num) {
    return num.toLocaleString('ko-KR')+"원";
  }

  // For Like
  const [isLike, setIsLike] = useState(props.state.isLike);

  const timeClassName = (props.state.time<100 ? "product-time" : "product-time-smalltext");
  const timesmallClassName = (props.state.time<100 ? "product-time small" : "product-time-smalltext small");
  if (props.type === "0"){
    return(
        <div className="top-product-wrap mb-3">
          <Row>
            <Col xs={12}>
              <div className="card product-wrap">
                <div className="product-image-wrap">
                  <Link to={"/product-detail?r_id="+props.state.r_id}><img src= {props.state.imageURL} className="card-img-top" alt="top product" /></Link>

                  <span className={timeClassName}>{props.state.time}<span>분</span></span>

                  {props.state.challenging && <span className="product-challenging">도전!</span>}
                  <Card.Body>
                    <Link className="product-detail" to={"/product-detail?r_id="+props.state.r_id}><h5 className="product-title mb-3">{props.state.name}</h5></Link>
                    <div className="product-price mb-0">{makeWonString(props.state.price)+" "}{props.state.Lprice && <span className="text-neom text-small text-silver">{"(L-size +"+makeWonString(props.state.Lprice)+")"}</span>}</div>
                    <div className="product-rate mt-0 mb-0">
                      <UserRating rate={props.state.rating} size="sm" />
                      <div className="product-rate-score">{String(props.state.rating)+"("+props.state.ratingNum+")"}</div>
                    </div>
                  </Card.Body>
                  <span className={isLike ? "product-like active" : "product-like"}  onClick={() => setIsLike(!isLike)}>&nbsp;</span>
                </div>
              </div>
            </Col>
          </Row>
        </div>
    );
  }
  else{
    return(
        <Col xs={6}>
          <Card className="product-wrap no-border">
            <div className="product-image-wrap">
              <Link to={"/product-detail?r_id="+props.state.r_id}><Card.Img variant="top" src={props.state.imageURL} /></Link>
              <span className="product-badge small">
                <span className={timesmallClassName}>{props.state.time}<span>분</span></span>
                {props.state.challenging && <span className="product-challenging small">도전!</span>}
              </span>
              <span className={isLike ? "product-likesmall active" : "product-likesmall"}  onClick={() => setIsLike(!isLike)}>&nbsp;</span>
            </div>

            <div className="card-body small">
            <Link className="product-detail" to={"/product-detail?r_id="+props.state.r_id}><Card.Title className="product-title small">{props.state.name}</Card.Title></Link>
              <div className="product-price small mb-0 mt-0">{makeWonString(props.state.price)+" "}{props.state.Lprice && <span className="text-neor text-xsmall text-blackgraytrans">{"(L-size +"+makeWonString(props.state.Lprice)+")"}</span>}</div>
              <div className="product-rate">
                <UserRating rate={4} size="xs" />
                <div className="product-rate-score small">4(25)</div>
              </div>
            </div>
          </Card>
        </Col>
    );
  }
}

export default MainProduct;