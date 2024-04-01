import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import error404Page from './assets/icons/404-image.svg';
import ArrowBackSvg from './UI/Icons/ArrowBackSvg';

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  return (
    <div id="error-page" className="error-page">
      <div className="error-page-content">
        <h1 className="error-page-content-title">404</h1>
        <img className="error-page-content-img" src={error404Page} alt="404" />
        <Link to={'/'} className="error-page-content-back">
          <ArrowBackSvg classNames="error-page-content-back-icon" />
          go home
        </Link>
      </div>
    </div>
  );
}
