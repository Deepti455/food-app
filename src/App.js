import React, { lazy, Suspense, useState } from 'react'
import  ReactDOM  from 'react-dom/client'
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import Cart from './components/Cart'
import RestaurantMenu from './components/RestaurantMenu';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Shimmer from './components/Shimmer';
import Instamart from './components/Instamart';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import store from './utils/store';

const Profile = lazy(()=>import('./components/Profile'))
// const Instamart = lazy(()=>import('./components/Instamart'))

/***
 * 
 * HMR -> Hot Module Replacement
 * File Watcher Algorithm - c++
 * BUNDLING
 * MINIFY
 * Cleaning our code
 * Dev and Production build
 * Super fast build Algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatible with older version of browser
 * HTTPS on dev
 * dynamic port number
 * Consistent Hashing Algorithm
 * Zero config bundler
 * 
*/

// const heading = React.createElement('h1', {id: 'title'}, "Namaste Everyone")
//     console.log(heading)
    

//     const heading1 = React.createElement('h1', null, "Heading 1")
//     const heading2 = React.createElement('h2',{id: 'title'}, "Heading 2")

//     const container = React.createElement('div', {id: 'container'}, [heading1, heading2])


//     //passing a react element inside the root
//     // root.render(heading)

const AppLayout=()=>{
  const [user, setUser] = useState({
    name: 'deepti',
    email: 'deepti123@gmail.com'
  })
    return (
        <Provider store={store}>
        <UserContext.Provider value={{
          user: user,
          setUser: setUser
        }}>
        <Header/>
        <Outlet/>
        <Footer/>
        </UserContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout/>,
    errorElement: <Error/>,
    children: [
      {
        path: '/',
        element: <Body/>
      },
      {
        path: '/about',
        element: <About/>,
        children: [
          {
            path:'profile',
            element: <Profile/>
          }
        ]
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/cart',
        element: <Cart/>
      },
      {
        path: '/restaurant/:resId',
        element: <RestaurantMenu/>
      },
      {
        path: '/instamart',
        element: <Suspense fallback={<Shimmer/>}><Instamart/></Suspense>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter}/>)