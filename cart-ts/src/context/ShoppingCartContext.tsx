import { createContext, useContext, useState } from "react";
import { RxPadding } from "react-icons/rx";

interface IShoppingCartProvider {
  children: React.ReactNode;
}

interface ICartItems {
  id: number;
  qty: number;
}

interface IShoppingCartContext {
  cartItems: ICartItems[];
}

export const ShoppingCartContext = createContext({} as IShoppingCartContext);

export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
};

export function ShoppingCartProvider({ children }: IShoppingCartProvider) {
  const [cartItems, setCartItems] = useState<ICartItems[]>([]);
  return (
    <ShoppingCartContext.Provider value={{ cartItems }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
