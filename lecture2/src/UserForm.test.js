import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { expect, jest } from '@jest/globals';
import UserForm from './UserForm';

test('it shows two inputs and a button', () => {
  render(<UserForm />);

  const inputs = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');

  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test('it calls onUserAdd when the form is submitted - callback version', () => {
  const argList = [];

  const callback = (...args) => {
    argList.push(args);
  };

  // render(<UserForm onUserAdd={() => {}} />);
  render(<UserForm onUserAdd={callback} />);

  const [nameInput, emailInput] = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');

  user.click(nameInput);
  user.keyboard('jane');

  user.click(emailInput);
  user.keyboard('jane@jane.com');

  user.click(button);

  expect(argList).toHaveLength(1);
  expect(argList[0][0]).toEqual({ name: 'jane', email: 'jane@jane.com' });
});

test('it calls onUserAdd when the form is submitted - mock version', () => {
  const mock = jest.fn();

  render(<UserForm onUserAdd={mock} />);

  // const [nameInput, emailInput] = screen.getAllByRole('textbox'); non htmlFor
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

  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({ name: 'jane', email: 'jane@jane.com' });
});
