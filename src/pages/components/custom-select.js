import { Button, Dropdown } from "react-bootstrap";
import { useState, useEffect} from "react";

function CustomSelect(props) {
  const options = props.options;
  const [value, setValue] = props.value;
  const [isOpened, setIsOpened] = useState(false);
  const [mainText, setMainText] = useState("");

  function set(str){
    setValue(str);
    if(!localStorage.getItem("session_token")) localStorage.setItem("sort", str);
  }

  function setStyle(idx){
    if(parseInt(value)-1 === idx) return "dropdown-selected";
    return "dropdown-normal";
  }
  useEffect(() => {
    setMainText(options[parseInt(value)-1].label);
  }, [value]);

  return (
    <>
    { isOpened &&
    <div style={{width:"100vw", height:"100vh", position:"fixed", zIndex:"1", left: "0", top: "0"}} onClick={() => {setIsOpened(false)}}>
    </div>
    }
    <div className="dropdownsmall-wrap">
      <Button variant="default" className="text-neor text-small text-black"onClick={() => {setIsOpened(!isOpened)}}>{mainText}</Button>
      {(isOpened) &&
        <Dropdown className="small">
            {options.map((state, index) => (
                <div key={index}>
                    <Dropdown.Item className={setStyle(index)} style={{justifyContent:"center"}} onClick={() => {set(state.value);}}>
                        {state.label}
                    </Dropdown.Item>
                </div>
            ))}
        </Dropdown>
      }
    </div>
    </>
  );
}

export default CustomSelect;