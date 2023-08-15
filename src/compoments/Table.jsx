import React from 'react';
import useFetch from './hooks/useFetch';

function Table() {
  const url = 'https://jsonplaceholder.typicode.com';
  const [data, error, isLoading, refetch] = useFetch(`${url}/users`);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <ul>
        {data.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
}

export default Table;
