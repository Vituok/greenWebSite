import React from "react";
  

const Plan = ({ items }) => {
  return (
<div className="planSection marginMenu" id="plan">

    <div className="flexCol">
   
      {items.map((item, index) => (
        <div className="planCard"
          key={index}
          
        >
          <h2 >
            {index + 1}. {item.title}
          </h2>
          <p    >{item.text}</p>
        </div>
      ))}

    </div>

    </div>

  );
};


export default Plan;
