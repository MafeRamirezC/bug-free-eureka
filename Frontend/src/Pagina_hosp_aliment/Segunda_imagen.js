import React from "react";
import imagenes from "../Imagenes/imagen11.jpg";
import "../../src/styles.css";


export default function Segunda_imagen() {
  return (
    <div className="imagen11">
     
     <img src={imagenes} alt="" width="150" height="150" />
    
    </div>
  );
}