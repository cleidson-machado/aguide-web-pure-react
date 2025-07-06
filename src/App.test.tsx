import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Seu Guia de Portugal para Brasileiros", () => {
  render(<App />);
  const linkElement = screen.getByText(
    /Seu Guia de Portugal para Brasileiros/i
  );
  expect(linkElement).toBeInTheDocument();
});
