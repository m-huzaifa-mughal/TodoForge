
import { Route, Routes } from "react-router-dom"
import { ThemeProvider } from "./components/Theme/theme-provider"
import LoginPage from "./components/Forms/designed-login"
import SignupPage from "./components/Forms/designed-signup"




const App = () => {
  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

         
      <Routes>
        
        <Route path="/signup" element={<SignupPage />}/>
        <Route path="/login" element={<LoginPage />}/>

      </Routes> 
    </ThemeProvider>
    
    </>
  )
}

export default App
