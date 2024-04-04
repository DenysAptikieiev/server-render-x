import React from 'react';
import styles from './Input.module.scss';
const Input = ({ required, disabled, className, ...rest }) => {
  return (
    <input
      className={`${styles.input} ${className}`}
      disabled={disabled}
      autoComplete={'off'}
      value={rest.value ?? ''}
      {...rest}
    />
  );
};

export default Input;
