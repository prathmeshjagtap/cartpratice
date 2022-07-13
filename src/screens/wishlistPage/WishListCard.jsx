import React from "react";
import { useCartContext, useWishlistContext } from "../../context";
import { useNavigate } from "react-router-dom";

function WishListCard({ item }) {
	const { cart, setCart } = useCartContext();
	const { wishlist, setWishlist } = useWishlistContext();
	const navigate = useNavigate();
	return (
		<div className="w-60 m-4 shadow-sm p-2">
			<div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
				<img
					src={item?.images[0]}
					alt={item?.name}
					className="w-full h-full object-center object-cover lg:w-full lg:h-full"
				/>
			</div>
			<div className="mt-4 flex justify-between">
				<div>
					<h3 className="text-sm text-gray-700">{item?.name}</h3>
					<p className="mt-1 text-sm text-gray-500">Brand : {item.brand}</p>
					<div className="flex gap-1">
						<p className="text-sm font-medium text-gray-900">
							${item?.discountedPrice}
						</p>
						<p className="text-sm font-medium text-gray-900 line-through">
							${item?.originalPrice}
						</p>
					</div>
					<h6 className="text-sm font-medium text-gray-900">
						⭐ {item?.rating}
					</h6>
					<h6 className="text-sm font-medium text-gray-900">
						Sizes{" "}
						{item?.sizes.map((size) => (
							<span key={size} className="m-2">
								{size}
							</span>
						))}
					</h6>
					{cart?.find((cartItem) => cartItem.id === item.id) ? (
						<button
							className="p-2 bg-blue-500 m-1 rounded-md text-white text-center  w-full%"
							onClick={() => navigate("/cart")}
						>
							Go to Cart
						</button>
					) : (
						<button
							className="p-2 bg-blue-500 m-1 rounded-md text-white text-center  w-full%"
							onClick={() => {
								setCart([...cart, { ...item, quantity: 1 }]);
								setWishlist(
									wishlist.filter((product) => product.id !== item.id)
								);
							}}
						>
							Add to Cart
						</button>
					)}
					<button
						className="p-2 bg-blue-500 m-1 rounded-md text-white text-center  w-full%"
						onClick={() =>
							setWishlist(wishlist.filter((product) => product.id !== item.id))
						}
					>
						Delete From Wishlist
					</button>
				</div>
			</div>
		</div>
	);
}

export { WishListCard };
