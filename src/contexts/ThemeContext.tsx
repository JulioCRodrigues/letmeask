import { createContext } from 'react';

type ThemeContextType = 'ligth' | 'dark';

const ThemeContext = createContext<ThemeContextType>('ligth');

