import { useState } from "react";
//import styles from "App.css";
const App = () => {
    const [ counter,setCounter] = useState(0);

    return (
        
        <div className="card text-center my-5">
           
            <button onClick={()=> setCounter((prevCount) => prevCount-1)}>-</button>
              {counter} 
            <button onClick={()=> setCounter((prevCount) => prevCount+1)}>+</button>
          
        </div>
    );
}
export default App;