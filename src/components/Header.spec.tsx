import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "./Header";

describe("Given the Header component", () => {
  describe("When it is rendered", () => {
    // Arrange
    beforeEach(() => {
      render(<Header />);
    });

    test("Then it should display the correct header title", () => {
      // Act
      const headerTitle = screen.getByRole("heading", { level: 2 });

      // Assert
      expect(headerTitle).toHaveTextContent("The Movie App");
    });
  });
});
