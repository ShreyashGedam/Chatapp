import { useEffect, useState } from "react";

const PREFIX = "chat-app";

export const UseLocalStorage = (key, initialValue) => {
  const preFixedKey = PREFIX + key;

  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(preFixedKey);
    // if (jsonValue !== null) return jsonValue;
    if (jsonValue !== undefined) return JSON.parse(jsonValue);
    if (typeof initialValue == "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(preFixedKey, JSON.stringify(value));
  }, [preFixedKey, value]);

  return [value, setValue];
};
