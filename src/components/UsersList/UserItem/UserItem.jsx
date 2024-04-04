import React, { useCallback } from 'react';
import styles from './UserItem.module.scss';
import cn from 'classnames';
import defaultUserAvatar from '../../../assets/icons/default-user-avatar.svg';
import { Link } from 'react-router-dom';
import { Highlighting } from '../../../helpers/components.helper';
export const UserItem = ({ id, fullName, email, phone, address, search }) => {
  const light = useCallback((message) => <Highlighting string={message} match={search} />, [search]);

  return (
    <li className={cn(styles.userItem, { [styles.userItem_active]: false })}>
      <img className={styles.userItem_avatar} src={defaultUserAvatar} alt="default user avatar" />
      <div className={styles.userItem_content}>
        <div className={styles.userItem_content__main}>
          <h2 className={styles.userName}>{light(fullName)}</h2>
          <Link className={styles.userEmail} to={`mailto:${email}`}>
            {light(email)}
          </Link>
          <Link className={styles.userEmail} to={`tel:${phone}`}>
            {light(phone?.split(' ')[0])}
          </Link>
        </div>
        <div className={styles.userItem_content__links}>
          <Link className={styles.links_item} to={`user-posts/${id}`}>
            posts
          </Link>
          <Link className={styles.links_item} to={`user-albums/${id}`}>
            albums
          </Link>
        </div>
      </div>
    </li>
  );
};
