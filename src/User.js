import React from 'react';

const User = () => {

    const user = {
    name: 'Hi',
    email: 'abc@gmail.com'
    }

    return (
        <div>
            <p>Name: {user.name}</p>
            <p>Email: {user.email} </p>
        </div>
    );
};

export default User;