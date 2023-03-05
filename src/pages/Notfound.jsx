import React from 'react'
import { Link } from 'react-router-dom';

const Notfound = () => {
  return (
    <div className="my-5 py-5 text-center">
      <h1 className="my-5 py-5 text-danger">
        <h1 class="my-5 py-5 text-danger">
          Sorry, page you are looking for is not found 🙁
        </h1>
        <Link className='btn btn-danger' to="/">Go back home</Link>
      </h1>
    </div>
  );
}

export default Notfound
