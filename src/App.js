import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import MyFormPage from './components/MyFormPage';

export default function App() {
  return (
    <Provider store={store}>
      <MyFormPage />
    </Provider>
  )
}

