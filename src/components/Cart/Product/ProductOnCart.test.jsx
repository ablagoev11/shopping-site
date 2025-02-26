import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Product from "./Product";
import { CartContext, CartProvider } from "../../../providers/CartProvider";
import userEvent from "@testing-library/user-event";

describe("Product", () => {
  it("should render product", () => {
    const product = {
      images: ["image1", "image2"],
      title: "product1",
      price: 15,
      id: 1,
      quantity: 2,
    };
    render(
      <CartProvider>
        <Product product={product} />
      </CartProvider>
    );

    expect(
      screen.getByRole("heading", { name: /product1/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/30\$/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /\+/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /-/i })).toBeInTheDocument();
    expect(screen.getByText(/2/i, { selector: "p" })).toBeInTheDocument();
  });
});
