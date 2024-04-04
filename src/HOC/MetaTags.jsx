import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getPageDescription, getPageTitle } from '../helpers/routers.helper';

export function MetaTags() {
  const location = useLocation();

  useEffect(() => {
    // Отримайте дані про сторінку з контексту роутингу
    const pageTitle = getPageTitle(location.pathname);
    const pageDescription = getPageDescription(location.pathname);

    // Встановіть метатеги title та description
    document.title = pageTitle;
    const metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (metaDescriptionTag) {
      metaDescriptionTag.setAttribute('content', pageDescription);
    }
  }, [location.pathname]);

  return null;
}
