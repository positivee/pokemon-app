import { createContext, useState } from "react";

interface LikedList {
  likedList: string[] | null;
  updateLikedList?: (arg: string) => void;
}
interface ChildrenProps {
  children: React.ReactNode;
}

const LikedListContext = createContext<LikedList | null>(null);

export function CartProvider({ children }: ChildrenProps) {
  const [likedList, setLikedList] = useState<string[]>([]);

  const updateLikedList = (name: string) => {
    if (!likedList.includes(name))
      setLikedList((prev: string[]) => [...prev, name]);
    else
      setLikedList((prev: string[]) =>
        prev.filter((item: string) => item !== name)
      );
  };

  return (
    <LikedListContext.Provider value={{ likedList, updateLikedList }}>
      {children}
    </LikedListContext.Provider>
  );
}

export default LikedListContext;
