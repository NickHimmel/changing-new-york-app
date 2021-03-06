import React from 'react';

const Button = (props) => {
  return (
    <button className="button" onClick={props.onClick}>
      <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M14 1.4L12.6 0 7 5.6 1.4 0 0 1.4 5.6 7 0 12.6 1.4 14 7 8.4l5.6 5.6 1.4-1.4L8.4 7z" fill="#9B9B9B" fillRule="evenodd"/></svg>
    </button>
  );
}

export default Button;
