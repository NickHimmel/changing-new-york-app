import React from 'react';

const Photo = (props) => {
  console.log(props.data.uuid)
  return (
    <div>
      <h1>Title</h1>
      <h2>Note</h2>
      <h3>photographer</h3>
      <p>date</p>
    </div>
  )
}

export default Photo;
