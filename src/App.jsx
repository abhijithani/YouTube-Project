
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
import ResultPage from './components/Resultpage/ResultPage'
import RootLayout from '../RootLayout'



const appRouter = createBrowserRouter([{
  path: "/",
  element: <RootLayout />,
  children: [
  
      {
        path: "/",
        element: <Maincontainer />
      },
      {
        path: "/watch",
        element: <WatchPage />
      },
      {
        path: "/demo",
        element: <><Demo /> <Demo2 /></>

      },
      {
        path: "/results",
        element: <ResultPage/>

      }
  ]
}])



function App() {

  return (
    <Provider store={store}>
      <div>
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  )
}

export default App
// const appRouter = createBrowserRouter([{
  //   path: "/",
//   element: <RootLayout/>,
//   children: [
//     {
//       path: "/",
//       element: <Maincontainer />
//     },
//     {
//       path: "watch",
//       element: <WatchPage />
//     },
//     {
//       path: "demo",
//       element: <><Demo /> <Demo2/></>

//     },
//     {
//       path: "results",
//       element: <ResultPage/>

//     }
//   ]
// }])


