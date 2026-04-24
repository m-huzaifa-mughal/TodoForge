
import { InputGroupBlockEnd } from './TodoAdd'

import Navbar from './Navbar'

const Dashboard = () => {
  return (
 <>
    <div><Navbar /></div>
    <div className='flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10'><InputGroupBlockEnd /></div>
     <div></div>
</>
  )
}

export default Dashboard