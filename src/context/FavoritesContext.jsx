import { createContext, useState } from "react";


export const FavoritesContext = createContext(null)

export const FavoritesProvider = ({ children }) => {

    //Global state tanımladım!
    const [favorites, setFavorites] = useState([])

    return <FavoritesContext.Provider value={{ favorites, setFavorites }}>
        {children}
    </FavoritesContext.Provider>
}