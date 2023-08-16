import axios from "axios"
import React, {useEffect, useState} from "react"


export default function Product(){
  const [products, getProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/product/").then((data) => {
      console.log(data);
      getProducts(data?.data);
    });
  }, []);
  const  productList= products.map((product) =>
    <div className="col" key={product.id} value={product.id}>
      <div className="card h-100">
        <img src={product.image} className="card-img-top" alt="." height={128} width={128}/>
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <h5 className="card-price">price {product.price}</h5>
        </div>
      </div>
    </div>
  );
  return (
  <div className="row row-cols-1 row-cols-md-3 g-4 my-0">
    {productList}
    </div>
  );
}