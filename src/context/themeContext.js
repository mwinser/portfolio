import React, {useState} from "react";


export const themes = {
    light: {
      foreground: '#4c4c4c',
      middle: '#bbbbbb',
      background: '#eeeeee',
      projectTile: '#ffffff',
    },
    dark: {
      foreground: '#ffffff',
      middle: '#555555',
      background: 'linear-gradient(#0f0e26, #004d9c)',
      projectTile: 'rgba(15,14,38,1)',
    },
  };

export const ThemeContext = React.createContext();

const ThemeProvider = (props) => {
    // this state will be shared with all components 
    const [theme, setTheme] = useState(themes.dark); 

    return (
            // this is the provider providing state
        <ThemeContext.Provider value={[theme, setTheme]}>
            {props.children}
        </ThemeContext.Provider>
    )
};
export default ThemeProvider