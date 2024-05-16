import { render, screen } from "@testing-library/react";
import SearchPage from '../search/page'

describe('SearchPage', () => {

    jest
        .spyOn(window.HTMLMediaElement.prototype, 'pause')
        .mockImplementation(() => { })

    it('renders SearchPage component with input with correct placeholder', () => {
        render(<SearchPage />)

        const input = screen.getByPlaceholderText(/Cartoon Voice Actor/i)

        expect(input).toBeInTheDocument()
    });



    it("renders searchPage unchanged", () => {
        const { container } = render(<SearchPage />);
        expect(container).toMatchSnapshot();
    });

    it('renders at least one link', () => {
        render(<SearchPage />)

        const links = screen.getAllByRole('link');

        expect(links.length).toBeGreaterThan(0)
    });


})

