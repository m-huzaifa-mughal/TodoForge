
import { Route, Routes } from "react-router-dom"
import { ThemeProvider } from "./Context/theme-provider"
import LoginPage from "./pages/Loginpage"
import SignupPage from "./pages/Signuppage"
import HomePage from "./pages/HomePage"
import Dashboard  from "./pages/Dashboard"
import NotFound from "./pages/NotFound"
import ProtectedRoute from "./routes/ProtectedRoute"



const App = () => {
  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

      <Routes>
        
        <Route path="/signup" element={<SignupPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/dashboard" element=
            {<ProtectedRoute>
                <Dashboard/>
            </ProtectedRoute>}
          />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
    
    </>
  )
}

export default App
