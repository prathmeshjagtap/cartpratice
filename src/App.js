import "./App.css";
import { Products, Cart, WishList } from "./screens";
import { Routes, Route } from "react-router-dom";
function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Products />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/wishlist" element={<WishList />} />
			</Routes>
		</div>
	);
}

export default App;
