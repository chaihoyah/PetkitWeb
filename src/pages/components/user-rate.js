

function UserRating(props) {
  const activeStar = props.rate;
  const unactiveStart = 5 - activeStar;

  const strActiveStar = [];
  const strUnactiveStar = [];

  const className = "user-rating d-flex" + (props.align && (props.align.length > 0) ? " justify-content-" + props.align :  "");

  var size = 29;
  var mright = 3;
  var mtop = 0;
  var padding = "0 0";

  if (props.size && (props.size === "xs")) {
    size = 11;
  } else if (props.size === "sm") {
    size = 13;
  } else {
    size = 25;
    mright = 6;
    mtop = -8;
    padding = "8px 0"
  }


  for (var i = 0; i < activeStar; i++) {
    strActiveStar.push(<img key={i} src="images/star-active-icon.svg" style = {{width: String(size)+"px", marginRight: String(mright)+"px", marginTop: String(mtop)+"px"}} alt="review active" />);
  }

  for (var j = 0; j < unactiveStart; j++) {
    strUnactiveStar.push(<img key={j} src="images/star-icon.svg" style = {{width: String(size)+"px", marginRight: String(mright)+"px", marginTop: String(mtop)+"px"}} alt="review unactive" />);
  }

  return (
    <div className={className} style={{padding:padding}}>
      { (props.show === "on") && <div className="user-rating-score">{activeStar}</div>}
      <div className="user-rating-star-wrap">
        {strActiveStar}
        {strUnactiveStar}
      </div>
    </div>
  );
}

export default UserRating;