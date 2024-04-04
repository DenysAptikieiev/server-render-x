import Input from '../../../UI/Input/Input';
import React from 'react';

export const Controls = ({ searchValue, loading, onChange }) => {
  return (
    <form id="search-form" role="search">
      <Input value={searchValue} onChange={onChange} placeholder="Search users" disabled={loading} />
      <div id="search-spinner" aria-hidden hidden={true} />
      <div className="sr-only" aria-live="polite"></div>
    </form>
  );
};
