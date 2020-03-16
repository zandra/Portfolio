import React from "react";

export default function ImageContainer(props) {
  return (
    <div className="image-container">
      <img src={props.src} alt={props.alt} />
      {/* <img src={props.src} alt={props.alt} height={props.height ? props.height : "auto" } width={props.width ? props.width : "100%"}/>    */}
    </div>
    )
}