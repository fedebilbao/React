import { createContext, useContext } from "react" ;

const ThemeContext = createContext ([]);

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({children}) => {
    return (
    <ThemeContext.Provider
     value={[]} 
     displayName="ThemeContext"
     >
      {children}
    </ThemeContext.Provider>
    );
};