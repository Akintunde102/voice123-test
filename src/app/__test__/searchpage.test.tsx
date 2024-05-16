import { render, screen } from "@testing-library/react";
import SearchPage from '../search/page'

describe('SearchPage', () => {

    it('renders SearchPage component with input with correct placeholder', () => {
        render(<SearchPage />)

        const input = screen.getByPlaceholderText(/Cartoon Voice Actor/i)

        expect(input).toBeInTheDocument()
    });



    it("renders searchPage unchanged", () => {
        const { container } = render(<SearchPage />);
        expect(container).toMatchSnapshot();
    });

    it('renders no result text when there is no result', () => {
        render(<SearchPage />)

        const noResultText = screen.getByText(/loading data/i)

        expect(noResultText).toBeInTheDocument()
    });


})

