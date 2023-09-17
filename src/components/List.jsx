import React from 'react'

export default function List(props) {
  const { children, onItemClick } = props;  

  return (    
    <div className='list-container'>
        <ul className='list'>
            { children.map( child => {            
                
                return (
                    <li className='list-item border m-1 p-2' key={child.id} id={child.id}>
                        <a href='#' onClick={onItemClick}>{ child.name }</a>
                    </li>
                )
                })
            }        
        </ul>
    </div>
  )
}
