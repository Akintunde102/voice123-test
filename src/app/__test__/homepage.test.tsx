import { render, screen } from "@testing-library/react";
import HomePage from '../page'

describe('Page', () => {
  it('renders a heading', () => {

    render(<HomePage />)

    const heading = screen.getByRole('heading', {
      level: 1,
      name: /voice123/i
    })

    expect(heading).toBeInTheDocument()
  })

  it('renders a submit button', () => {
    render(<HomePage />)

    const button = screen.getByRole('button', { name: /search/i })

    expect(button).toBeInTheDocument()
  })

  it('renders an input box', () => {
    render(<HomePage />)

    const input = screen.getByRole('textbox')

    expect(input).toBeInTheDocument()
  })


  it("renders homepage unchanged", () => {
    const { container } = render(<HomePage />);
    expect(container).toMatchSnapshot();
  });
})