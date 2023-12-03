import React from 'react'
import { TiStarFullOutline } from "react-icons/ti";
import {random} from "nanoid";

export default function Rating({rating}) {
    const addStars = () =>{
        var indents = [];
        for (var i = 0; i < rating; i++) {
        indents.push(<TiStarFullOutline key={i + (random(1, 10000))}/>);
        }
        return indents;
    }
    
  return (
          addStars()
  )
}
