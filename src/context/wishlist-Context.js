import { createContext, useContext, useState } from "react";

const wishlistContext = createContext();

const WishListProvider = ({ children }) => {
	const [wishlist, setWishlist] = useState([]);
	return (
		<wishlistContext.Provider value={{ wishlist, setWishlist }}>
			{children}
		</wishlistContext.Provider>
	);
};

const useWishlistContext = () => useContext(wishlistContext);

export { WishListProvider, useWishlistContext };
