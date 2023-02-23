import React from 'react';
import { render } from '@testing-library/react';
import { Button } from '../components/Button';

test('renders the button component without crashing', () => {
  render(<Button text="Click me" buttonOnClick={() => console.log('clicked')} />);
});
