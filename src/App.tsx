import { RouterProvider } from 'react-router-dom'
import { rootRoutes } from './pages'


function App() {
  return (
    <div className='bg-[#E8E8E8]'>
      <RouterProvider router={rootRoutes}/>
    </div>
  )
}

export default App