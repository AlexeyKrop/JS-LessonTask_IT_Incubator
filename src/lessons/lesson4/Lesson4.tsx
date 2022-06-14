import React from 'react'
import './lesson_4';

const createPromiseHandler = () => {
  const promise = new Promise(() => {})
  console.log(promise)
}
const Lesson4 = () => {
    return (
        <div>
            <button onClick={createPromiseHandler} id='btn-create-promise'>Create Promise</button>
            <button id='btn-resolve-promise'>Resolve Promise</button>
            <button id='btn-reject-promise'>Reject Promise</button>
        </div>
    );
}

export default Lesson4;