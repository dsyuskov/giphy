import React from 'react';
export default function Button(props) {
  return (
    <button
      className = {"button button--" + props.value}
      onClick = {props.onClick}
    >{props.value}</button>
  )
}