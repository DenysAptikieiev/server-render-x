import React, { useState } from 'react';
import '../scss/users.scss';
import { Controls } from '../components/UsersList/Controls/Controls';
import { UserList } from '../components/UsersList/UserList';
import useInput from '../hooks/useInput';
import useDebounce from '../hooks/useDebounce';

export default function Root({data}) {
  const [loading, setLoading] = useState(true);

  const { value: inputValue, onChange: handleChange } = useInput('');
  const debounceValue = useDebounce(inputValue);
  return (
    <section className="wrapper container">
      <h1 className="users-title">Users</h1>
      <Controls searchValue={inputValue} onChange={handleChange} loading={loading} />
      <UserList searchValue={debounceValue} setLoading={setLoading} loading={loading} />
    </section>
  );
}
