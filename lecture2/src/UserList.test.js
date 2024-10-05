import { render, screen, within } from '@testing-library/react';
// import user from '@testing-library/user-event';
import { expect } from '@jest/globals';
import UserList from './UserList';

function renderComponent() {
  const users = [
    { name: 'jane', email: 'jane@jane.com' },
    { name: 'john', email: 'john@john.com' },
  ];
  render(<UserList users={users} />);

  return { users };
}

test('render one row per user', () => {
  /*
  const users = [
    { name: 'jane', email: 'jane@jane.com' },
    { name: 'john', email: 'john@john.com' },
  ];
  render(<UserList users={users} />);
  */
  renderComponent();

  /* PlayGround
  screen.logTestingPlaygroundURL();
  */

  // const rows = screen.getAllByRole('row'); // we have to use data-testid and within
  const rows = within(screen.getByTestId('users')).getAllByRole('row');

  expect(rows).toHaveLength(2); // not gonna work withoud data-testid, add data-testid to UserList and use "within" above
});

test('render the email and name of each user', () => {
  /*
  const users = [
    { name: 'jane', email: 'jane@jane.com' },
    { name: 'john', email: 'john@john.com' },
  ];
  render(<UserList users={users} />);
  */
  const { users } = renderComponent();

  /* PlayGround
  screen.logTestingPlaygroundURL();
  */
  for (let user of users) {
    const name = screen.getByRole('cell', { name: user.name });
    const email = screen.getByRole('cell', { name: user.email });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
