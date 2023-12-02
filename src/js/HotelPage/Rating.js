import React from 'react'
import { TiStarFullOutline } from "react-icons/ti";

export default function Rating({star}) {
    const addStars = () =>{
        var indents = [];
        for (var i = 0; i < star; i++) {
        indents.push(<TiStarFullOutline/>);
        }
        return indents;
    }
    
  return (
     addStars()
  )
}
