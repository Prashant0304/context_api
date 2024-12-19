


import {ThemeContextProvider} from "./context/ThemeContext";
import { LangContextProvider } from "./context/LangContext"; 
import Container from "./components/Container";

function App() {

  return (
   
       <LangContextProvider>
          <ThemeContextProvider>
          <Container/>
          </ThemeContextProvider>
          </LangContextProvider>
    
  );
}

export default App;
