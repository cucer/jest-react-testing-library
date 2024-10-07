import { screen, render } from "@testing-library/react";
import RepositoriesSummary from "./RepositoriesSummary";

test("displays info about the repository", () => {
  const repository = {
    language: "JavaScript",
    stargazers_count: 5,
    forks: 30,
    open_issues: 1,
  };

  render(<RepositoriesSummary repository={repository} />);

  for (const key in repository) {
    const value = repository[key];
    // const element = screen.getByText(value, { exact: false });
    const element = screen.getByText(new RegExp(value));

    expect(element).toBeInTheDocument();
  }
});
