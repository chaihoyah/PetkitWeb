import { Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found">
      <Row>
        <Col xs={12}>
          <Image
            src="https://www.pngitem.com/pimgs/m/561-5616833_image-not-found-png-not-found-404-png.png"
            alt="not-found"
            className="img-fluid mt-5"
          />
          <div className="mt-5 text-center">
            <p><Image src="images/logo.png" alt="logo" /></p>
            <Link to="/" className="btn btn-primary btn-lg">집에가</Link>
          </div>
        </Col>
      </Row>
      
    </div>
  );
}

export default NotFound;
