import React, { useState } from "react";
import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer"; 
import Girl from "./components/Girl";
const App = () => {
  const [input, setinput] = useState("");
  const btnClickHua = (e, item) => {
    try { 
      console.log(item)
      let currInput = input;
      
      currInput = currInput + item;
      if (item === "C") {
        setinput("");
      }else if(currInput.includes("/0")){
        setinput("")
      }
       else if (item === "=" && currInput.length>=2) {
        currInput = currInput.slice(0, currInput.length - 1);
        let value = eval(currInput);
        console.log(value);
        setinput(value);
      } else {
        if(item==='=' && currInput.length===1){ 
          setinput('');
        } 
        else
        setinput(currInput);

      }
    } catch (error) {
      console.error("Some Input is Wrong");
      setinput("");
    }
  };
  // used eval overhere, my method
  return (
    <div className="ranjan">
      <Girl />
      <div className={styles.goBack}>
       <a href="https://github.com/Abhishek-Ranjan-16" > Go Back to Github</a>
      </div>
      <div className={` ${styles['calculator']} `}>
        <Display  inp={input}></Display>
        <ButtonsContainer btnClickHua={btnClickHua}></ButtonsContainer>
      </div>
    </div>
  );
};

export default App;
