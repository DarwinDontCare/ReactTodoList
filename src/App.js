import logo from './logo.svg';
import './App.css';
import React from "react";
import LoadingWheel from './components/loading';
import InputForm from './components/form';

function App() {

  const [isLoading, setIsLoading] = React.useState(true);
  var animationClassNameTrigger = "App";

  if (!isLoading) animationClassNameTrigger = "App content-fadein"

  setTimeout(() => {setIsLoading(false)}, 5000);

  return (
    <div style={{textAlign: "center", height: "100%", position: "absolute", width: "100%"}}>
      <LoadingWheel isLoading={isLoading}/>
      <div className={animationClassNameTrigger} style={{height: "100%"}}>
        <InputForm></InputForm>
      </div>
    </div>
  );
}

export default App;
