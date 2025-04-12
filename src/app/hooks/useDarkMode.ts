'use client';

import { useEffect, useState } from 'react';

export function useDarkMode() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = localStorage.getItem('theme');
    const shouldUseDark = storedTheme === 'dark' || (!storedTheme && isSystemDark);

    setIsDark(shouldUseDark);
    document.documentElement.classList.toggle('dark', shouldUseDark); // Isso aplica a classe 'dark' ao html
  }, []);

  const toggleDark = () => {
    const newValue = !isDark;
    setIsDark(newValue);
    document.documentElement.classList.toggle('dark', newValue); // Alterna a classe 'dark'
    localStorage.setItem('theme', newValue ? 'dark' : 'light'); // Armazena a escolha do usuário no localStorage
  };

  return { isDark, toggleDark };
}
