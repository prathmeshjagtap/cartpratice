import React from "react";
import { useCartContext, useWishlistContext } from "../../context";

function CartCard({ product }) {
	const { cart, setCart } = useCartContext();
	const { wishlist, setWishlist } = useWishlistContext();
	const incrementQuantity = (id) => {
		setCart(
			cart.map((item) =>
				item.id === id ? { ...item, quantity: item.quantity + 1 } : item
			)
		);
	};
	const decrementQuantity = (id) => {
		const product = cart.find((item) => item.id === id);
		if (Number(product?.quantity) <= 1) {
			setCart(cart.filter((item) => item.id !== id));
		} else {
			setCart(
				cart.map((item) =>
					item.id === id ? { ...item, quantity: item.quantity - 1 } : item
				)
			);
		}
	};

	return (
		<div>
			<div className=" bg-base-100 shadow-xl flex w-96  m-2">
				<div className="w-48">
					<img src={product?.images[0]} alt={product.name} />
				</div>
				<div className="flex flex-col justify-evenly p-2">
					<h3 className="text-sm text-gray-700">{product?.name}</h3>
					<p className="mt-1 text-sm text-gray-500">Brand : {product.brand}</p>
					<div className="flex gap-1">
						<p className="text-sm font-medium text-gray-900">
							${product?.discountedPrice}
						</p>
						<p className="text-sm font-medium text-gray-900 line-through">
							${product?.originalPrice}
						</p>
					</div>
					<h6 className="text-sm font-medium text-gray-900">
						⭐ {product?.rating}
					</h6>
					<h6 className="text-sm font-medium text-gray-900">
						Sizes{" "}
						{product?.sizes.map((size) => (
							<span key={size} className="m-2">
								{size}
							</span>
						))}
					</h6>
					<div className="flex gap-1">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6 cursor-pointer "
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
							onClick={() => decrementQuantity(product?.id)}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
						<p>{product?.quantity}</p>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6  cursor-pointer"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
							onClick={() => incrementQuantity(product?.id)}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</div>

					{wishlist?.find((item) => item.id === product.id) ? (
						<button
							className="p-2 bg-blue-500 m-1 rounded-md text-white text-center  w-full%"
							onClick={() => {
								setCart(cart.filter((item) => item.id !== product.id));
							}}
						>
							Save for Later
						</button>
					) : (
						<button
							className="p-2 bg-blue-500 m-1 rounded-md text-white text-center  w-full%"
							onClick={() => {
								setWishlist([...wishlist, product]);
								setCart(cart.filter((item) => item.id !== product.id));
							}}
						>
							Save for Later
						</button>
					)}
				</div>
			</div>
		</div>
	);
}

export { CartCard };
