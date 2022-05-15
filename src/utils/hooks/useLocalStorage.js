import { useState } from "react";

export const useLocalStorage = (key, defaultValue = null) => {
  const [localStoredValue, setState] = useState(() => {
    if (defaultValue) {
      localStorage.setItem(key, JSON.stringify(defaultValue));
    } else {
      const data = JSON.parse(localStorage.getItem(key));
      if (!data) {
        localStorage.setItem(key, JSON.stringify(defaultValue));
      }
    }

    return JSON.parse(localStorage.getItem(key));
  });
  const setLocalStoreValue = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
    setState(value);
  };
  return [localStoredValue, setLocalStoreValue];
};
