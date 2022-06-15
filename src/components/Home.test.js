import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Home from './Home'

test('renders heading as a text', () => {
    render(<Home />);
    const headingElement = screen.getByText('Discover delicious desserts from around the globe!');
    expect(headingElement).toBeInTheDocument();
});