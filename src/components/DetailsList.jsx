import React from 'react';

export default function DetailsList(props) {
    const { details } = props;
    const items = [];
    for (const prop in details) {
        items.push(`${prop}: ${details[prop]}`);
    }

    return (
        <ul>
            {
                items.map( (item, index) => {
                    return (
                        <li key={index} className='border m-1 p-2'>
                            {item}
                        </li>
                    );
                })
            }
        </ul>
  )
}
