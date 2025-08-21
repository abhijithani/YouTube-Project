
import './App.css'
import Body from './components/body/Body'
import Header from './components/header/Header'
import { Provider } from 'react-redux'
import store from './components/utilis/appstore'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Maincontainer from './components/body/Maincontainer'
import WatchPage from './components/watchpage/WatchPage'
import Demo from './components/Demo/Demo'
import Demo2 from './components/Demo/Demo2'


const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children: [
    {
      path: "/",
      element: <Maincontainer />
    },
    {
      path: "watch",
      element: <WatchPage />
    },
    {
      path: "demo",
      element: <><Demo /> <Demo2/></>
      
    }
  ]
}])



function App() {

  return (
    <Provider store={store}>
      <div>
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  )
}

export default App
