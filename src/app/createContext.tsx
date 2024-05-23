// Contextを作成する
import { createContext, useContext } from "react";

const UrlContext = createContext("");

export const useUrl = () => useContext(UrlContext);
