import React from "react";

export default function Product(props) {
  // bds = {item.bds}
  // bs={item.bs}
  // srrt = {item.srrt}
  // title = {item.title}
  return (
    <div className="card">
      <img className="product--image" src={props.url} alt="product image" style={{borderRadius:"10px"}}/>
      <pre><span style={{fontWeight: "700"}}>{props.bds}</span> bds | <span style={{fontWeight: "700"}}>{props.bs}</span> ba | <span style={{fontWeight: "700"}}>{props.srrt}</span> sqrt | Active</pre>
      <h4>{props.description}</h4>
      <p>{props.title}</p>
      
    </div>
  );
}
