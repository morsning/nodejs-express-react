import React from 'react';

const ListResources = (props) => {
        
    return (
            <ul>
                {props.resources.map(value => (<li key={value}>{value}</li>))}
            </ul>
    );
}

export default ListResources;