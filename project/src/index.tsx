import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/app/app';
import Page404 from './pages/404Page/404-page';
import FavoritesPage from './pages/favoritesPage/favorites-page';
import LoginPage from './pages/loginPage/login-page';
import PrivateRoute from './components/privateRoute/private-route';
import { AutorizationStatus } from './consts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
const COUNT_OF_AVAILABLE_PLACES = 100;

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App countOfAvailablePlaces={COUNT_OF_AVAILABLE_PLACES}/>}/>
        <Route
          path='/favorites'
          element={
            <PrivateRoute
              autorizationStatus={AutorizationStatus.NoAuth}
            >
              <FavoritesPage/>
            </PrivateRoute>
          }
        />
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/offer/:id' />
        <Route path='*' element={<Page404/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
