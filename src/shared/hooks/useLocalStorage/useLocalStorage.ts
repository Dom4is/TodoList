import { useCallback, useEffect, useState } from "react";

export default function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, (value: T | ((prev: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      //Читаем значение localStorage или берем начальное
      const localStorageItem = window.localStorage.getItem(key);

      return localStorageItem
        ? (JSON.parse(localStorageItem) as T)
        : initialValue;
    } catch (error) {
      console.log(`Error reading localStorage key: ${key}, ${error}`);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      //При изменении сетим значение в localStorage
      const localStorageItem = JSON.stringify(storedValue);

      window.localStorage.setItem(key, localStorageItem);
    } catch (error) {
      console.log(`Error setting localStorage key: ${key}, ${error}`);
    }
  }, [key, storedValue]);

  const setValue = useCallback((value: T | ((prev: T) => T)) => {
    setStoredValue((prev) => {
      const newValue = value instanceof Function ? value(prev) : value;
      return newValue;
    });
  }, []);

  return [storedValue, setValue];
}
