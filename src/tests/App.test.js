import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from '../components/App';
import rootReducer from '../store/reducers/rootReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

jest.setTimeout(10000);

function waitSomeTime(time) {
  return new Promise(r => setTimeout(() => r('hehe'), time));
}

describe('App standard naviagation', () => {
  test('Renders correctly', () => {
    const app = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(app.container.innerHTML).toContain('Login');
  });

  test('Login test user', async () => {
    const app = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    const emailInput = app.getByLabelText('Email');
    const passowrdInput = app.getByLabelText('Password');
    fireEvent.change(emailInput, { target: { value: 'test@mail.com' } });
    fireEvent.change(passowrdInput, { target: { value: 'test123' } });
    fireEvent.click(app.getByText('Login'));
    await waitSomeTime(8000);
    expect(app.container.innerHTML).toContain('Logout');
  });

  test('Add Measurement', async () => {
    const app = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    fireEvent.click(app.getByText('Add Measurement'));
    const typeInput = app.getByLabelText('Type');
    const valueInput = app.getByLabelText('Value (cm)');
    fireEvent.change(typeInput, { target: { value: 2 } });
    fireEvent.change(valueInput, { target: { value: 80.0 } });
    fireEvent.click(app.getByText('Add'));
    await waitSomeTime(2000);
    expect(app.container.innerHTML).toContain('80.0');
  });
});
