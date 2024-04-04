import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root';
import ErrorPage from './error-page';
import UserPosts from './routes/UserPosts';
import UserAlbums from './routes/UserAlbums';
import { MetaTags } from './HOC/MetaTags';

const router = createBrowserRouter([
  {
    path: '/',
    Component: () => (
        <>
          <MetaTags />
          <Root />
        </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: '/user-posts/:userId',
    Component: () => (
        <>
          <MetaTags />
          <UserPosts />
        </>
    ),
  },
  {
    path: '/user-albums/:userId',
    Component: () => (
        <>
          <MetaTags />
          <UserAlbums />
        </>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    <RouterProvider router={router} />
    // </React.StrictMode>
);
