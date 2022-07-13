import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<div className="navbar bg-blue-200 flex px-12 items-center py-2 sticky top-0">
			<div className="flex-1">
				<Link to="/">
					<p className="btn btn-ghost normal-case text-xl">Cart Task</p>
				</Link>
			</div>
			<div className="flex">
				<ul className="p-2 bg-base-100 flex gap-4">
					<Link to="/">
						<p className="cursor-pointer">Products</p>
					</Link>
					<Link to="/wishlist">
						<p className="cursor-pointer">Wishlist</p>
					</Link>
					<Link to="/cart">
						<p className="cursor-pointer">Cart</p>
					</Link>
				</ul>
			</div>
		</div>
	);
}

export { Navbar };
