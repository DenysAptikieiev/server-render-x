import React, { useEffect, useState } from 'react';
import styles from './UserList.module.scss';
import { UserItem } from './UserItem/UserItem';
import { getUsersAll } from '../../api/getApi';

export const UserList = ({ searchValue, setLoading, loading }) => {
  const [data, setData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUsersAll();
        setData(response);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    if (loading) {
      fetchData();
    }
  }, [loading, setLoading]);

  useEffect(() => {
    if (data.length) {
      if (searchValue.length) {
        const results = data.filter(
          (item) =>
            item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
            item.email.toLowerCase().includes(searchValue.toLowerCase()) ||
            item.phone.toLowerCase().includes(searchValue.toLowerCase())
        );
        setSearchResults(results);
      } else {
        setSearchResults(data);
      }
    }
  }, [searchValue, data]);

  return (
    <ul className={styles.userList}>
      {loading ? (
        <div className={`loader ${styles.loader}`}></div>
      ) : (
        searchResults.map((user) => {
          const { name, id, email, phone, address } = user;
          return (
            <UserItem
              key={id}
              id={id}
              fullName={name}
              email={email}
              phone={phone}
              address={address}
              search={searchValue}
            />
          );
        })
      )}
    </ul>
  );
};
