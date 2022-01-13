import { useState, useEffect } from "react";
import UserRating from "../components/user-rate";
import { Button, Row, Col, Form, Image, Pagination, Tabs, Tab, Modal } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";

import HeaderDetail from "../components/header-detail";

import "./product.css";


function DetailPage(props) {
  const navigate = useNavigate();
  const {state, search} = useLocation();
  const {r_id} = queryString.parse(search);
  const [isLike, setIsLike] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  /* Product Data*/
  const productName = "캐롭 바나나 케이크";
  const price = 6000;
  const largePrice = 3000;

  /* For Modal Q&A */
  const [showQA, setShowQA] = useState(false);
  const handleCloseQA = () => setShowQA(false);
  const handleShowQA = () => setShowQA(true);
  const [question, setQuestion] = useState("");

  /* For Modal Cart */
  const [showCart, setShowCart] = useState(false);
  const handleCloseCart = () => setShowCart(false);
  const handleShowCart = () => setShowCart(true);

  /* For increase/descrease */
  var regularTotalPrice = 0;
  var largeTotalPrice = 0;
  var totalPrice = 0;
  const [regularNum, setRegularNum] = useState(0);
  regularTotalPrice = price*regularNum;
  const plusRegularNum = () => {
    if(regularNum < 99) setRegularNum(regularNum+1);
  }
  const minusRegularNum = () => {
    if(regularNum > 0) setRegularNum(regularNum-1);
  }
  const [largeNum, setLargeNum] = useState(0);
  largeTotalPrice = (price+largePrice) * largeNum;
  const plusLargeNum = () => {
    if(largeNum < 99) setLargeNum(largeNum+1);
  }
  const minusLargeNum = () => {
    if(largeNum > 0) setLargeNum(largeNum-1);
  }
  totalPrice = regularTotalPrice + largeTotalPrice;

  /* Data - ingred, recipe info */
  const [ingredData, setIngredData] = useState([]);
  const [recipeData, setRecipeData] = useState([]);

  /* Data - review*/
  const [reviewNum, setReviewNum] = useState(0);
  const [reviewList, setReviewList] = useState([]); //페이지로 나눠져있는 리뷰 2중 리스트 [[1페이지 리뷰], [2페이지 리뷰] 등등등]
  const [reviewData, setReviewData] = useState([]); //현재 렌더링되는 리뷰 데이터
  const [pagecontrol, setPagecontrol] = useState([]); //페이지 번호 컴포넌트 배열
  const [activePage, setActivePage] = useState(1); //활성화된 페이지

  /* Data - QnA*/
  const [isMore, setIsMore] = useState(false);
  const [qaList, setQaList] = useState([]); //QA 총 리스트
  const [qaData, setQaData] = useState([]); //현재 렌더링되는 Q&A 데이터

  function getData() {
    // 레시피탭 - 재료 리스트
    let ingredList = [{
        name: "블루베리",
        amt: "20g"
    }, {
        name: "산딸기",
        amt: "45g"
    }, {
        name: "락토프리 우유",
        amt: "40ml/40ml"
    }]
    // 레시피탭 - 실제 레시피 리스트
    let recipeList = [{
      imageURL: "prod0/1.png",
      contents: "블루베리(20g)와 우유(40ml)를 믹서기에 넣고 갈아주세요."
    },{
      imageURL: "prod0/2.png",
      contents: "산딸기(45g)와 우유(40ml)를 믹서기에 넣고 갈아주세요."
    }]
    // 리뷰탭 - 리뷰 리스트
    let reviewList = [{
      user: "신*호",
      score: 5,
      imageURL: "prod0/main.png",
      date: "2022.01.05",
      buyinfo: [10, 301],
      contents: "개맛있음ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ"
    },{
      user: "신*호",
      score: 4,
      imageURL: "prod0/main.png",
      date: "2022.01.01",
      buyinfo: [0, 3],
      contents: "신년~~"
    },{
      user: "Al*x",
      score: 5,
      imageURL: "prod0/main.png",
      date: "2021.12.25",
      buyinfo: [0, 3],
      contents: "크리스마스~"
    },{
      user: "구*진",
      score: 1,
      imageURL: "prod0/main.png",
      date: "2021.12.22",
      buyinfo: [0, 3],
      contents: "개맛없음"
    }, {
      user: "구*진",
      score: 1,
      imageURL: "prod0/main.png",
      date: "2021.12.22",
      buyinfo: [0, 3],
      contents: "개맛없음"
    }, {
      user: "구*진",
      score: 1,
      imageURL: "prod0/main.png",
      date: "2021.12.22",
      buyinfo: [0, 3],
      contents: "개맛없음"
    }]
    let reviewLen = reviewList.length;

    let pageNum = Math.floor(reviewLen/5);
    if ((reviewLen - pageNum*5) > 0) pageNum += 1;

    /* 페이지네이션 컴포넌트 만들기*/
    let pages = [];
    for (let number = 1; number <= pageNum; number++) {
        pages.push(
          <Pagination.Item key={number} active= {number === activePage}>
            {number}
          </Pagination.Item>,
        );
    }
    /* 실제 리뷰 슬라이싱*/
    let real_reviewList = [];
    for (let page=0; page<pageNum; page++){
        let data = [];
        for(let i=0; i<5; i++){
            if(page*5+i < reviewLen) data.push(reviewList[page*5+i]);
            else break;
        }
        real_reviewList.push(data);
    }

    /* QnA 리스트*/
    let qaList = [{
      question: "양배추는 몇 g 오나요?",
      answer: "200g 드립니다~^^"
    },{
      question: "양배추는 몇 g 오나요?",
      answer: "200g 드립니다~^^"
    },{
      question: "양배추는 몇 g 오나요?",
      answer: "200g 드립니다~^^"
    },{
      question: "양배추는 몇 g 오나요?",
      answer: "200g 드립니다~^^"
    },{
      question: "양배추는 몇 g 오나요?",
      answer: "200g 드립니다~^^"
    },{
      question: "양배추는 몇 g 오나요?",
      answer: "200g 드립니다~^^"
    },{
      question: "양배추는 몇 g 오나요?",
      answer: "200g 드립니다~^^"
    },{
      question: "양배추는 몇 g 오나요?",
      answer: "200g 드립니다~^^"
    }]
    let qaData = qaList.slice(0, 5);

    setIngredData(ingredList);
    setRecipeData(recipeList);

    setReviewNum(reviewLen);
    setReviewList(real_reviewList);
    setReviewData(real_reviewList[activePage-1]);
    setPagecontrol(pages);

    setQaList(qaList);
    setQaData(qaData);
  }

  function changePage(num) {
    let pages = [];
    let pageNum = Math.floor(reviewNum/5);
    if ((reviewNum - pageNum*5) > 0) pageNum += 1;

    for (let number = 1; number <= pageNum; number++) {
        pages.push(
          <Pagination.Item key={number} active= {number === num}>
            {number}
          </Pagination.Item>,
        );
    }
    setActivePage(num);
    setPagecontrol(pages);
    setReviewData(reviewList[num-1]);
  }

  function qaMore() {
    setIsMore(true);
    setQaData(qaList);
  }

  useEffect(() => {
    getData();
    if(localStorage.getItem("session_token")){
        setIsLoggedIn(true);
        /* 강아지 정보 받기 */
    }
  }, []);

  function share() {
    console.log("share");
  }

  function makeWonString(num) {
    return num.toLocaleString('ko-KR')+"원";
  }

  function numTextFilter(val, type){
    let final = val.replace(/[^0-9]/g, "");
    if (type===0) setRegularNum(final);
    else if (type === 1) setLargeNum(final);
  }

  function goOrder(){
    let tmp_state = {product: {regular: regularNum, large: largeNum}}
    navigate("/order", {state:tmp_state});
  }

  return (
    <>
    <HeaderDetail/>
    <div className="product-detail-wrap">
      <Row>
        <Col xs={12}>
          <Image src="images/prod0/main.png" className="product-image" alt="product-main-image"/>
          <div style={{display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center"}}>
            <div className="d-flex">
                <span className="product-challenging" id="product-challenging-detail">도전!</span>
                <span className="product-detail-time"><span style={{marginTop: "2px"}}>125분</span></span>
            </div>
            <div className="d-flex">
                <Image src="images/share-icon.svg" className="product-detail-share" alt="share social" onClick={() => share()}/>
            </div>
          </div>
          <p className="product-title detail mt-1">캐롭바나나케이크</p>
          <p className="text-neoeb text-medium text-black mt-2">Kit: 6,000원 <span className="text-neom text-small text-black">(L-size +2000원)</span> </p>
          <p className="text-neom text-small text-gray">“어쩌구 저쩌구 저쩌구 우짜구 자짜구 맛있는 맛있는 피자” (요약, 설명)</p>
          {isLoggedIn ? (
            <p className="text-neom text-smallmedium text-blackgray text-center">{"뭉치"+"의 "+"1"+"일치 간식이에요!!"}</p>
          ):(
            <ul className="text-neom text-smallmedium text-blackgray">
              <li>{"소형견(~10kg): "+"5"+"일치"}</li>
              <li>{"중형견(10kg~20kg): "+"3"+"일치"}</li>
              <li>{"중형견(20kg): "+"1"+"일치"}</li>
            </ul>
          )
          }
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <Tabs justify defaultActiveKey="recipe" id="tab-product-detail" className="mt-3 mb-3 tab-petkit tab-product-detail">
            <Tab eventKey="recipe" tabClassName="tab-2text" title="레시피">
              <h1 className="product-detail-title text-neosb text-smallmedium text-halfblack" style={{marginTop:"30px", marginBottom:"20px"}}>재료</h1>
              {ingredData.map((state, index) =>
                <div key={index} className="product-ingredtable" style={{marginTop:"10px"}}>
                  <span className="text-neor text-small text-black">{state.name}</span>
                  <span className="text-neor text-small text-lightgray">{state.amt}</span>
                </div>
              )}
              <h1 className="product-detail-title text-neosb text-smallmedium text-halfblack" style={{marginTop:"36px", marginBottom:"30px"}}>레시피</h1>
              {recipeData.map((state, index) =>
                <div key={index} style={{marginBottom:"72px"}}>
                  <p className="mb-0"><Image src={"images/"+state.imageURL} className="product-image" /></p>
                  <p className="steptext text-neosb text-smallmedium text-halfblack">{"Step "+(parseInt(index)+1)}</p>
                  <p className="text-neor text-small text-black">{state.contents}</p>
                </div>
              )}
            </Tab>

            <Tab eventKey="kit-information" tabClassName="tab-2text" title="키트 정보">
                <Image src="images/prod0/kitinfo.jpg" className="product-image" alt="product-main-image" style={{marginTop:"30px"}}/>
            </Tab>

            <Tab eventKey="review" tabClassName="tab-2text" title="리뷰">
              <div style={{marginTop:"30px"}}>
                <p className="mb-0 text-neosb text-smallmedium text-halfblack">{"리뷰("+String(reviewNum)+")"}</p>
                <UserRating rate={4} show="on" align="center" />
              </div>
              {reviewData.map((review, index) =>
                  <div key={index} style={{borderBottom:"1px solid #E4E4E4", paddingBottom: "16px", marginBottom:"10px"}}>
                    <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center", marginBottom:"6px"}}>
                        <div className="text-neosb text-smallmedium text-halfblack">{review.user}</div>
                        <div className="text-neom text-small text-black">{review.date}</div>
                    </div>
                    <UserRating rate={review.score} size="sm" />
                    <div>
                      <p className="text-neom text-small text-black">{"구매 정보: Lx"+String(review.buyinfo[0])+", Mx"+String(review.buyinfo[1])}</p>
                      <Row>
                        <Col xs={4}><Image src={"images/"+review.imageURL} className="img-fluid" alt="product review" /></Col>
                        <Col xs={8}><span className="text-neor text-small text-black" style={{}}>{review.contents}</span></Col>
                      </Row>
                    </div>
                  </div>
              )}
              <div className="review-pagination"><Pagination onClick={(event) => changePage(parseInt(event.target.text))}>{pagecontrol}</Pagination></div>
            </Tab>

            <Tab eventKey="qna" tabClassName="tab-2text" title="Q&A">
              <p className="text-neosb text-smallmedium text-halfblack" style={{marginTop:"30px"}}>상품 문의</p>
              <div className="product-detail-qna">
                <Form.Group controlId="qna" style={{width: "70%"}}>
                    <Form.Control type="input" placeholder="상품 관련 질문을 등록해주세요." onChange= {(e) => {setQuestion(e.target.value);}} required />
                </Form.Group>
                <Button variant="purple" className="text-neom text-xxsmallmedium" style={{letterSpacing: "2.24px", width: "80px", height: "40px"}}onClick={handleShowQA}>등록</Button>
              </div>
              <div style={{marginTop:"52px"}}>
                <div className="text-neom text-small text-black" style={{width:"100%", padding: "8px 0", borderBottom: "1px solid #E4E4E4"}}>최근 질문</div>
                {qaData.map((qa, index) =>
                    <div key={index} style={{display:"flex", flexDirection:"column", marginTop:"8px", padding:"8px 0", borderBottom: "1px solid #E4E4E4"}}>
                      <div style={{display:"flex", flexDirection:"row", alignItems:"flex-start", marginBottom:"6px"}}>
                        <span className="text-neoh text-medium text-purple" style={{marginRight:"24px"}}>Q</span>
                        <span className="text-neor text-small text-black" style={{marginTop:"4px", lineHeight:"20.8px"}}>{qa.question}</span>
                      </div>
                      <div style={{display:"flex", flexDirection:"row", alignItems:"flex-start"}}>
                        <span className="text-neoh text-medium text-orange" style={{marginRight:"24px"}}>A</span>
                        <span className="text-neor text-small text-black" style={{marginTop:"4px", lineHeight:"20.8px"}}>{qa.answer}</span>
                      </div>
                    </div>
                )}
                {!isMore && <Button variant="purple" className="text-neom text-xxsmallmedium" style={{width:"100%", marginTop:"36px"}} onClick={() => {qaMore()}}>Q&A 더보기</Button>}
              </div>
              <Modal centered className="modal-qa" show={showQA} onHide={handleCloseQA}>
                <Modal.Body>질문을 등록하시겠습니까?</Modal.Body>
                <Modal.Footer className="justify-content-center">
                  <Button variant="primary" onClick={handleCloseQA}>등록</Button>
                  <Button variant="secondary" onClick={handleCloseQA}>취소</Button>
                </Modal.Footer>
              </Modal>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </div>

    {!showCart && <div className="product-cart-button">
      <span className={isLike ? "product-likedetail active" : "product-likedetail"}  onClick={() => setIsLike(!isLike)}></span>
      <Button variant="primary" className="text-neom text-xxsmallmedium" style={{display:"flex", justifyContent:"center", alignItems:"center", width:"84.07%", height:"44px"}} onClick={handleShowCart}>구매하기</Button>
    </div>}
    <Modal className="modal-cart" show={showCart} onHide={handleCloseCart}>
      <Modal.Header>
        <Button className="filter-btn-close" variant="default" onClick={handleCloseCart}></Button>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-cart-item" style={{borderTop: "1px solid #E4E4E4", borderBottom:"1px solid #E4E4E4", marginTop:"12px"}}>
          <div className="text-neor text-small text-black">{productName+"- Regular size"}</div>
          <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center", marginTop:"8px"}}>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
              <button className="btn-descrease" onClick={() => {minusRegularNum()}}></button>
              <input type="text" className="cart-item-number text-neosb text-xxsmallmedium text-black" value={regularNum} onChange={(e) => numTextFilter(e.target.value, 0)} />
              <button className="btn-increase" onClick={() => {plusRegularNum()}}></button>
            </div>
            <div className="modal-cart-price text-neosb text-xxsmallmedium text-black">{makeWonString(regularTotalPrice)}</div>
          </div>
        </div>
        { largePrice !== 0 &&
            <div className="modal-cart-item" style={{borderBottom:"1px solid #E4E4E4"}}>
              <div className="text-neor text-small text-black">{productName+"- Large size"}</div>
              <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center", marginTop:"8px"}}>
                <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                  <button className="btn-descrease" onClick={() => {minusLargeNum()}}></button>
                  <input type="text" className="cart-item-number text-neosb text-xxsmallmedium text-black" value={largeNum} onChange={(e) => numTextFilter(e.target.value, 1)} />
                  <button className="btn-increase" onClick={() => {plusLargeNum()}}></button>
                </div>
                <div className="modal-cart-price text-neosb text-xxsmallmedium text-black">{makeWonString(largeTotalPrice)}</div>
              </div>
            </div>
        }
        <div className="modal-cart-item-total text-neor text-small text-black" style={{display:"flex", flexDirection:"row", justifyContent:"flex-end", alignItems:"center", marginTop:"16px"}}>총 상품 금액&nbsp;<span className="text-neoeb text-smallmedium text-red">{makeWonString(totalPrice)}</span></div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="default text-neom text-xxsmallmedium text-black" style={{display:"flex", flexDirection:"row", justifyContent:"center", height:"44px", width:"38%", paddingTop:"10px", border:"1px solid #9E9E9E"}} onClick={handleCloseCart}>장바구니</Button>
        <Button variant="primary text-neom text-xxsmallmedium text-black" style={{display:"flex", flexDirection:"row", justifyContent:"center", height:"44px", width:"56.4%", paddingTop:"12px"}} onClick={() => {goOrder()}}>바로구매</Button>
      </Modal.Footer>
    </Modal>
    </>
  );
}

export default DetailPage;