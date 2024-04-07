import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.scss';
import { createBrowserRouter, RouterProvider, useLoaderData } from 'react-router-dom';
import Root from './routes/Root';
import ErrorPage from './error-page';
import UserPosts from './routes/UserPosts';
import UserAlbums from './routes/UserAlbums';
import { MetaTags } from './HOC/MetaTags';

export const router = [
  {
    path: '/',
    Component: () => {
      let data = useLoaderData();
      return (
        <>
          <MetaTags />
          <Root data={data} />
        </>
      );
    },
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
];

const route = createBrowserRouter(router);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={route} />);
