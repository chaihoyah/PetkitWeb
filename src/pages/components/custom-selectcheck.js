import { Button, Dropdown, Image } from "react-bootstrap";
import { useState, useEffect} from "react";

function CustomSelectCheck(props) {
  const options = props.options;
  const [value, setValue] = props.value;
  const [isOpened, setIsOpened] = useState(false);
  const [mainText, setMainText] = useState("text-neor text-small text-silvergray");
  const [mainTextStyle, setMainTextStyle] = useState()

  function set(str){
    if(parseInt(str) === parseInt(value)){
        setValue("0");
        setMainText(props.placeholder);
    }
    else{
        setValue(str);
        setMainText(options[parseInt(str)-1].label);
    }
  }

  function setStyle(idx){
    if(parseInt(value)-1 === idx) return "large dropdown-checkselected";
    else return "large";
  }

  function textStyle(){
    if(parseInt(value) === 0) return "text-neor text-small text-silvergray";
    else return "text-neor text-small text-black";
  }

  useEffect(() => {
    setMainText(props.placeholder);
  }, []);
  return (
    <>
    { isOpened &&
    <div style={{width:"100vw", height:"100vh", position:"fixed", zIndex:"1", left: "0", top: "0"}} onClick={() => {setIsOpened(false)}}>
    </div>
    }
    <div className="dropdownlarge-wrap">
      <Button variant="default" className={textStyle()} onClick={() => {setIsOpened(!isOpened)}}>{mainText}</Button>
      {(isOpened) &&
        <Dropdown className="large">
            {options.map((state, index) => (
                <div key={index} style={{display:"flex"}}>
                    <Dropdown.Item className={setStyle(index)} onClick={() => {set(state.value);}}>
                        {"ㆍ"+state.label}
                    </Dropdown.Item>
                    { parseInt(value)-1 === index && <Image src="images/check-icon.svg" className="check-icon"/>}
                </div>
            ))}
        </Dropdown>
      }
    </div>
    </>
  );
}

export default CustomSelectCheck;