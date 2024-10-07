import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { expect } from '@jest/globals';
import App from './App';

/*
test('can receive a new user and show it on a list', () => {
  render(<App />);

  const nameInput = screen.getByRole('textbox', {
    name: /name/i, // i for Regex
  });

  const emailInput = screen.getByRole('textbox', {
    name: /email/i, // i for Regex
  });

  const button = screen.getByRole('button');

  user.click(nameInput);
  user.keyboard('jane');

  user.click(emailInput);
  user.keyboard('jane@jane.com');

  user.click(button);

  // screen.debug(); // it helps to find elements on screen, just use for debugging and then continue, check below, we found name and email via debug

  const name = screen.getByRole('cell', { name: 'jane' });
  const email = screen.getByRole('cell', { name: 'jane@jane.com' });

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
*/
