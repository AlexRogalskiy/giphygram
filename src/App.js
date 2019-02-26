import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Layout } from './components/shared/layout/Layout';
import RoutesConnected from './Routes';
import { Header } from './components/shared/header/Header';
import { storePropType } from './types/reduxTypes';
import { APP_BASE_URL } from './config';
import 'open-iconic/font/css/open-iconic-bootstrap.min.css';

export class App extends React.Component {
  static propTypes = {
    store: storePropType.isRequired,
  };

  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <BrowserRouter basename={APP_BASE_URL}>
          <Layout>
            <Header />
            <RoutesConnected />
          </Layout>
        </BrowserRouter>
      </Provider>
    );
  }
}