import React from "react";
import { Navbar } from "../../componets";
import { useWishlistContext } from "../../context";
import { useNavigate } from "react-router-dom";
import { WishListCard } from "./WishListCard";

function WishList() {
	const { wishlist } = useWishlistContext();
	const navigate = useNavigate();
	return (
		<div>
			<Navbar />
			<div className="flex  justify-center align-items: center; p-8">
				{wishlist?.length > 0 ? (
					<div>
						<h2 className="block mx-4 my-2">
							Wishlist Products : {wishlist?.length}
						</h2>
						<div className="flex flex-wrap">
							{wishlist?.map((item) => (
								<WishListCard item={item} key={item.id} />
							))}
						</div>
					</div>
				) : (
					<div className="flex flex-col justify-center items-center">
						<h1 className="font-bold text-red-500 text-center m-4">
							Your Wishlist is Empty add items to Cart
						</h1>
						<button
							className="p-2 bg-blue-500 m-1 rounded-md text-white text-center w-44"
							onClick={() => navigate("/")}
						>
							Shop Products
						</button>
					</div>
				)}
			</div>
		</div>
	);
}

export { WishList };
