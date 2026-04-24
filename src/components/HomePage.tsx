
import { Button } from './ui/button'
import { ModeToggle } from './Theme/mode-toggle'
import { GalleryVerticalEnd } from 'lucide-react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
<> 
        <div className='p-3'>
                            <ModeToggle/>
        </div>
    <  div className='flex flex-col items-center justify-center h-screen text-center p-30'>
        <GalleryVerticalEnd className="size-14 mb-5" />
        <h1 className='text-4xl font-bold'>Welcome to TodoForge!</h1>
        <p className='text-lg mt-4'>
            Your ultimate task management tool. Stay organized and boost your productivity with our intuitive interface and powerful features. Sign up now to start forging your path to success!
            
             </p>
        <Button className='p-5 m-8'>
            <Link to="signup">
                Get started
            </Link> 
        </Button>

    </div>
     </>
  )
}

export default HomePage