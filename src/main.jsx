import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './components/Layout'
import NewClient, {action as newClientAction} from './pages/NewClient'
import Index, {loader as loaderClients} from './pages/Index'
import EditClient, {loader as editLoaderClient, action as editActionClient} from './pages/EditClient'
import ErrorPage from './components/ErrorPage'
import {action as destroyActionClient} from './components/Client'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: loaderClients,
        errorElement: <ErrorPage />
      },
      {
        path: '/clients/new',
        element: <NewClient />,
        action: newClientAction,
        errorElement: <ErrorPage />
      },
      {
        path: '/clients/:clientID/edit',
        element: <EditClient />,
        loader: editLoaderClient,
        action: editActionClient,
        errorElement: <ErrorPage />
      },
      {
        path: '/clients/:clientID/destroy',
        action: destroyActionClient
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
