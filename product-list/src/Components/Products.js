import React,{useState, useEffect} from "react";
import Data from "../Data/Data.js"
const Products = () => {
//   const [productItem, setProductItem] = useState(data); // useState data
  const [productItem, setProductItem] = useState([]);
  const handleFilter = () => {
    const filterItem = productItem.filter((item) => {
        return (
            item.price > 1000
        )
    })

    setProductItem(filterItem);
  }

  const handleRating = () => {
    const filterRating = productItem.filter((item) => {
        return (
            item.rating < 3
        )
    })

    setProductItem(filterRating)
  }

  useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(res=>res.json())
            .then(data=>setProductItem(data))
  }, []);

  return (
    <div>
        <div className="filter-rating">
            <p className="filter" onClick={handleFilter}>filter by price</p>
            <p className="rating" onClick={handleRating}>filter by rating</p>
        </div>
        <div className="cart">
            {
                productItem.map((product) => (
                    <div className="product" key={product.id}>
                        <div className="product-image">
                            <img src={product.image} alt={product.title}/>
                        </div>
                        <div className="product-details">
                            <p className="product-title">{product.title}</p>
                            <p className="product-price">{product.price}</p>
                        </div>
                        <button>Add</button>
                    </div>
                ))
            }
        </div>
    </div>
  );
};

export default Products;
