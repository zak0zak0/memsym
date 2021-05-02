import { useState } from 'react';
import { DataType } from './data-type';

export function toByteString(value) {
  const buffer = new ArrayBuffer(1);
  const arr = new Uint8Array(buffer);
  arr[0] = +value;
  const normValue = arr[0];
  return normValue.toString(2).padStart(8, '0');
}

export function parseDataType(typeName) {
  const dataTypeKey = Object.keys(DataType).find(x => x.toLowerCase() === typeName.toLowerCase());
  return DataType[dataTypeKey];
}

export function useFeedback() {
  const [valid, setValid] = useState(true);
  const [message, setMessage] = useState('');
  const setError = message => {
    setValid(!message);
    setMessage(message);
  };

  return {
    valid,
    message,
    setError
  }
}