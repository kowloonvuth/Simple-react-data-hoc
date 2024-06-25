import React from 'react';
import User from './User';
import withLoader from './with-loader';


const UserWithLoader = withLoader(User);

function App() {
  return (
    <div>
      <UserWithLoader />
    </div>
  );
}

export default App;
