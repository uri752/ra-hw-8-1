import React, {useState, useEffect} from 'react';
import DetailsList from './DetailsList';

export default function Details(props) {
    const {id, name} = props;
    const initDetail = { 
        id: '',
        name:'',
        avatar:'',
        details: {}
    }

    const [detail, setDetail] = useState(initDetail);
    
    async function fetchDetails() {
        const url = `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`;
        const promise = fetch(url);
        promise.then( res => res.json() )
          .then( json => setDetail(json))
          .catch( err => {
            console.warn(err);
            alert('Ошибка получения данных с сервера!');
          });
    }

    useEffect( () => {
        setDetail(initDetail);
        fetchDetails();
    }, [id]);

    return (
    <div id={id} className='details'>
        <img src={detail.avatar} alt={name} />
        <div className='detail-body'>
            <p className='border m-1 p-2'>{name}</p>
            <DetailsList details={detail.details} />
        </div>
        
    </div>
  )
}
