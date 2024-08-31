import { useState, useEffect } from 'react';

interface LocalStorageProps<T> {
  key: string;
  defaultValue: T;
}

export default function useLocalStorage<T>({
  key,
  defaultValue,
}: LocalStorageProps<T>) {
  const [value, setValue] = useState<T>(() => {
    // Ensure that this runs only on the client side
    if (typeof window === 'undefined') {
      return defaultValue;
    }
    
    const storedValue = window.localStorage.getItem(key);
    return storedValue !== null ? (JSON.parse(storedValue) as T) : defaultValue;
  });

  useEffect(() => {
    // Store the value in localStorage only on the client side
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue] as const;
}