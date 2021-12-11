

function UserRating(props) {
  const activeStar = props.rate;
  const unactiveStart = 5 - activeStar;

  const strActiveStar = [];
  const strUnactiveStar = [];

  const className = "user-rating d-flex" + (props.align && (props.align.length > 0) ? " justify-content-" + props.align :  "");

  var size = 29;

  if (props.size && (props.size === "xs")) {
    size = 10;
  } else if (props.size === "sm") {
    size = 20;
  } else {
    size = 29;
  }


  for (var i = 0; i < activeStar; i++) {
    strActiveStar.push(<img key={i} src="images/star-active-icon.png" width={size} alt="user review" />);
  }

  for (var j = 0; j < unactiveStart; j++) {
    strUnactiveStar.push(<img key={j} src="images/star-icon.png" width={size} alt="user review" />);
  }

  return (
    <div className={className}>
      {(props.show && (props.show === "on")) ? <span className="user-rating-score">{activeStar}</span> : ""}
      <div className="user-rating-start-wrap">
        {strActiveStar}
        {strUnactiveStar}
      </div>
    </div>
  );
}

export default UserRating;