import React, { createContext, useEffect, useState } from 'react';

type ChildrenType = {
  children: React.ReactNode;
};
type Theme = 'light' | 'dark';
type StateType = {
  theme: Theme;
  handleTheme: () => void;
};
const result = localStorage.getItem('theme');
const storage = result && JSON.parse(result);
export const ThemeBgContext = createContext<StateType>({
  theme: storage,
  handleTheme: () => {},
});

const ThemeContext = ({ children }: ChildrenType) => {
  const [theme, setTheme] = useState<Theme>(storage);

  const handleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);
  return (
    <div>
      <ThemeBgContext.Provider value={{ theme, handleTheme }}>
        {children}
      </ThemeBgContext.Provider>
    </div>
  );
};

export default ThemeContext;
