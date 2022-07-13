import React from "react";
import { ProductCard, Navbar } from "../../componets";

import data from "../../data/products.json";

function Products() {
	const { products } = data;
	return (
		<div>
			<Navbar />
			<div className="flex  justify-center align-items: center; p-8">
				<div className="">
					<h2 className="block mx-4 my-2">All Products : {products?.length}</h2>
					<div className="flex flex-wrap">
						{products?.map((item) => (
							<ProductCard item={item} key={item.id} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export { Products };
