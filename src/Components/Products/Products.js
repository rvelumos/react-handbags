import React from 'react';

import bag1 from "../../assets/bag_1.png";
import bag2 from "../../assets/bag_2.png";
import bag3 from "../../assets/bag_3.png";
import bag4 from "../../assets/bag_4.png";

import Product from "./Product/Product";

const Products = () => {
    return (
        <>
            <Product name="The handy bag" price="400" label="Best seller" image={bag1}/>
            <Product name="The stylish bag" price="250" label="Best seller" image={bag2}/>
            <Product name="The simple bag" price="300" label="Best seller" image={bag3}/>
            <Product name="The trendy bag" price="150" label="Best seller" image={bag4}/>
        </>
    )
}

export default Products;