import {routeList} from './routes/RouteLists';
import Navbar from './components/Navbar';
import {useRoutes} from "react-router-dom"

function App() {
  const element = useRoutes(routeList)
  return (
    <>
    <Navbar/>
    {element}
    </>
  )
}

export default App;
