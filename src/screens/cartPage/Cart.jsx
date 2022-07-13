import React from "react";
import { Navbar } from "../../componets";
import { useCartContext } from "../../context";
import { CartCard } from "./CartCard";
import { useNavigate } from "react-router-dom";

function Cart() {
	const { cart } = useCartContext();
	const navigate = useNavigate();
	const deliveryCharges = 99;
	const totalPreviousPrice = cart.reduce(
		(acc, current) =>
			acc + Number(current.originalPrice) * Number(current.quantity),
		0
	);
	const totalPrice = cart.reduce(
		(acc, current) =>
			acc + Number(current.discountedPrice) * Number(current.quantity),
		0
	);
	const totaldiscount = totalPreviousPrice - totalPrice;
	const totalAmount = totalPrice + deliveryCharges;
	return (
		<div>
			<Navbar />
			{cart?.length > 0 ? (
				<div className="flex justify-center ">
					<div>
						<h1 className="font-bold m-4">Cart has {cart.length} products</h1>
						{cart?.map((product) => (
							<CartCard key={product.id} product={product} />
						))}
					</div>
					<div className="flex flex-col bg-base-100 shadow-xl p-4 w-72 h-fit top-24 sticky  mt-12  ">
						<h2 className="font-bold mb-2 border-b-[3px]">Price Details</h2>
						<ul className="flex flex-col mb-2 border-b-[3px]">
							<li className="flex justify-between mb-2 ">
								<p>Price({cart.length} items)</p>
								<p>
									<i className="fas fa-rupee-sign fa-1x"></i>
									{totalPreviousPrice}
								</p>
							</li>
							<li className="flex justify-between mb-2">
								<p className="font-semibold">Discount</p>
								<p>
									-<i className="fas fa-rupee-sign fa-1x"></i>
									{totaldiscount}
								</p>
							</li>
							<li className="flex justify-between mb-2 ">
								<p className="font-semibold">Delivery Charges</p>
								<p>
									<i className="fas fa-rupee-sign fa-1x"></i>
									{deliveryCharges}
								</p>
							</li>
							<li className="flex justify-between mb-2 ">
								<p className="font-semibold">Total Amount</p>
								<p>{totalAmount}</p>
							</li>
						</ul>
						<p className="font-semibold ">
							You will save
							{totaldiscount} on this order
						</p>
						<button className="p-2 bg-blue-500 m-1 rounded-md text-white text-center  w-full%">
							Buy Products
						</button>
					</div>
				</div>
			) : (
				<div className="flex flex-col justify-center items-center">
					<h1 className="font-bold text-red-500 text-center m-4">
						Your Cart is Empty add items to Cart
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
	);
}

export { Cart };
