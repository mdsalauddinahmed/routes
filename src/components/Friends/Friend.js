import React from 'react';
 
const Friends = (props) => {
    const {name,email}=props.friend;
    const styleFriend = {
        border:'1px solid purple',
        margin:'20px',
        padding:'20px',
        borderRadius:'10px'
    }
    return (
        <div style={styleFriend}>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
        </div>
    );
};

export default Friends;