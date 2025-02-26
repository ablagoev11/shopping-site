import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Product from "./Product";
import { CartContext, CartProvider } from "../../providers/CartProvider";
import userEvent from "@testing-library/user-event";

describe("Product", () => {
  it("should render product", () => {
    const product = {
      images: ["image1", "image2"],
      title: "product1",
      price: 10,
      id: 1,
    };
    render(
      <CartProvider>
        <Product product={product} />
      </CartProvider>
    );

    expect(
      screen.getByRole("heading", { name: /product1/i })
    ).toBeInTheDocument();
    expect(screen.getByText("10$")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  it("should not render product", () => {
    const product = {
      images: ["image1"],
      title: "product1",
      price: 10,
      id: 1,
    };
    render(
      <CartContext.Provider value={{ addCart: () => {} }}>
        <Product product={product} />
      </CartContext.Provider>
    );
    expect(
      screen.queryByRole("heading", { name: "product1" })
    ).not.toBeInTheDocument();
    expect(screen.queryByText("10$")).not.toBeInTheDocument();
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
  it("it should call addCart", async () => {
    const user = userEvent.setup();
    const product = {
      images: ["image1", "image2"],
      title: "product1",
      price: 10,
      id: 1,
    };

    const addCart = vi.fn();
    render(
      <CartContext.Provider value={{ addCart }}>
        <Product product={product} />
      </CartContext.Provider>
    );

    const button = screen.getByRole("button");

    await user.click(button);

    expect(addCart).toHaveBeenCalledTimes(1);
    expect(addCart).toHaveBeenCalledWith(product);
  });
});
