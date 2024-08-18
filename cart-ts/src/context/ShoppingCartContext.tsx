import { createContext, useContext, useState } from "react";

interface IShoppingCartProvider {
  children: React.ReactNode;
}

interface ICartItems {
  id: number;
  qty: number;
}

interface IShoppingCartContext {
  cartItems: ICartItems[];
  handleIncreaseProductQty: (id: number) => void;
}

export const ShoppingCartContext = createContext({} as IShoppingCartContext);

export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
};

export function ShoppingCartProvider({ children }: IShoppingCartProvider) {
  const [cartItems, setCartItems] = useState<ICartItems[]>([]);

  //////////////////////////////   handleIncreaseProductQty :

  const handleIncreaseProductQty = (id: number) => {
    setCartItems((currentItem) => {
      let selectedItem = currentItem.find((item) => item.id == id);
      if (selectedItem == null) {
        return [...currentItem, { id: id, qty: 1 }];
      } else {
        return currentItem.map((item) => {
          if (item.id == id) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  //////////////////////////////////////////////////

  return (
    <ShoppingCartContext.Provider
      value={{ cartItems, handleIncreaseProductQty }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
