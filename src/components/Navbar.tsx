import { GalleryVerticalEnd } from 'lucide-react'
import { ModeToggle } from "./Theme/mode-toggle"
import { Button } from './ui/button'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-background border-b ontainer flex h-16 items-center justify-between px-5 ">


          <h1 className="text-xl font-bold px-2 flex items-center gap-2"> 
            <GalleryVerticalEnd className="size-6" /> TodoForge
            </h1>
        <div className="flex items-center">
                <ModeToggle/>
            <Button
            onClick={() => navigate("/")} 
            variant="destructive" size="lg" className="ml-4">
              Logout
            </Button>
        </div>
    </div>
  )
}

export default Navbar