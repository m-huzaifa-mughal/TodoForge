
import Navbar from '../components/layouts/Navbar'
import { TodoAdd } from '../components/layouts/TodoAdd'
const Dashboard = () => {
  return (
 <>
    <div><Navbar /></div>
    <div className='flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10'><TodoAdd /></div>
</>
  )
}

export default Dashboard