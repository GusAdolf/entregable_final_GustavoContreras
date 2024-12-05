import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import App from '../App';  

test('Debe renderizar el Navbar y la página principal', () => {
  render(<App />);

  const navbar = screen.getByText(/Home/i);
  expect(navbar).not.toBeNull();

  const mainPage = screen.getByText(/Rick & Morty Store/i); 
  expect(mainPage).not.toBeNull(); 
});
