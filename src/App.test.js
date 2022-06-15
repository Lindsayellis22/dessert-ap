import { render, screen } from '@testing-library/react';
import App from './App'

test('renders heading as a text', () => {
    render(<App />);
    const headingElement = screen.getByText('The Cultured Confectioner');
    expect(headingElement).toBeInTheDocument()
});