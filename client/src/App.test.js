import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import About from './pages/About';
import ArticlesList from './pages/ArticlesList';

test('renders navbar with home text', () => {
  render(<App />);
  const homeLink = screen.getByText(/home/i);
  expect(homeLink).toBeInTheDocument();
});

test('renders the About page when navigated to /about', () => {
  render(
    <MemoryRouter initialEntries={['/about']}>
      <About />
    </MemoryRouter>
  );
  const aboutHeading = screen.getByText(/about/i);
  expect(aboutHeading).toBeInTheDocument();
});

test('renders Articles list when navigated to /articles-list', () => {
  render(
    <MemoryRouter initialEntries={['/about']}>
      <ArticlesList />
    </MemoryRouter>
  );
  const articlesHeading = screen.getByText(/articles/i);
  expect(articlesHeading).toBeInTheDocument();
});