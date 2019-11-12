import React, {Component} from 'react';
export default function Button(props) {
  return (
    <button herf="#" 
      onClick = {props.onClick}
    >{props.value}</button>
  )
}