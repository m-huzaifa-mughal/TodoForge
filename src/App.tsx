
import { Route, Routes } from "react-router-dom"
import { ThemeProvider } from "./components/Theme/theme-provider"
import LoginPage from "./components/Forms/designed-login"
import SignupPage from "./components/Forms/designed-signup"
import HomePage from "./components/homePage"
import Dashboard  from "./components/Dashboard"
import NotFound from "./components/NotFound"



const App = () => {
  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

         
      <Routes>
        
        <Route path="/signup" element={<SignupPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/" element={<HomePage/>}/>

          
         <Route path="/dashboard" element={<Dashboard/>}/>

          <Route path="*" element={<NotFound />} />
      </Routes> 
    </ThemeProvider>
    
    </>
  )
}

export default App
