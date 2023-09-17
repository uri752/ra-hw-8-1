import logo from './logo.svg';
import './App.css';
import List from './components/List';
import Details from './components/Details';
import { useEffect, useState } from 'react';

function App() {
  
  const [users, setUsers] = useState([]);
  const [info, setInfo] = useState({id:'', name:''});
  
  async function fetchUsers() {
    const promise = fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json');
    promise.then( res => res.json() )
      .then( json => setUsers(json))
      .catch( err => {
        console.warn(err);
        alert('Ошибка получения данных с сервера!');
      });
  }

  useEffect( () => {
    fetchUsers();
  }, [] );

  function handleItemClick({target}) {
    const id = target.closest('.list-item').id;
    setInfo( {id: id, name: target.textContent} );
  }

  return (
    <div className='container'>
      <List onItemClick={handleItemClick}>      
        {users}
      </List>
      { info.id !== '' && <Details {...info} /> }
    </div>    
  );
}

export default App;
