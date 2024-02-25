import React from 'react';
import useStorage from './useStorage';

export default function CustomHook() {
    const [inputValue, setInputValue] = useStorage('');
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };
  return (
    <div>
        <input type="text" value={inputValue}  onChange={handleChange} />
        <p>Go to application in developer tools . and check for the locational and sessional storage</p>
    </div>
  )
}
