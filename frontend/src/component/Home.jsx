import React from "react";

function Home() {
  return (
    <div> 
      <header className="bg-primary text-white" style={{height: "20rem"}}>
        <div className="row col-md-6 text-center m-auto p-5" >
          <h1>Hi! Welcome to CoAI! A helper for any coder! Use it today!</h1>
        </div>
      </header>
      <div>
      <div className="row col-md-6 m-auto p-5">
      <h1>About CoAI</h1>
      <p>CoAI is personal helper tool for any coder out there that needs extra solution recalling.  
        It searches solution codes based on saved keywords, titles, and project name. Don't let those hours of stackflowing and googling go to waste. 
        Store them in CoAI now!</p>
      </div>
    </div>
</div>
  
  );
}

export default Home;
