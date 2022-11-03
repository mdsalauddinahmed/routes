import React from 'react';

const Friends = (props) => {
    const {name,email}=props.friend;
    return (
        <div>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
        </div>
    );
};

export default Friends;