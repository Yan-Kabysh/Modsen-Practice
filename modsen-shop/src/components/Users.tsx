import React, { useState } from 'react';

import IMAGE1 from '@/images/favicon.png';
import IMAGE2 from '@/images/test.svg';

const Users = () => {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
        culpa animi autem provident illum fuga consectetur ipsum architecto
        ipsam, nisi veniam, deserunt rerum asperiores placeat mollitia deleniti?
      </p>

      <div>
        <img src={IMAGE1} alt="demo webpack" width={300} height={300} />
        <img src={IMAGE2} alt="demo file" width={300} height={300} />
      </div>

      <div className="wrapper">
        <button onClick={() => setNumber((num) => num + 1)}>Click Me!</button>

        <p>{number}</p>
      </div>
    </div>
  );
};

export default Users;
