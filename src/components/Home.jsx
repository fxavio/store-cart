import React from 'react';
import { useDispatch } from "react-redux";
import { useGetAllProductsQuery } from "../slices/productsApi";
import { addToCart } from "../slices/cartSlice";
// import { useHistory } from "react-router";
import { useNavigate } from 'react-router-dom';

  const Home = () => {
  const dispatch = useDispatch();
  // const history = useHistory();
  const navigate = useNavigate();
  
  const { data, error, isLoading } = useGetAllProductsQuery();
  console.log("Api", isLoading);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    // history.push("/cart");
    // navigate.push('/cart')
    navigate('/cart')
  };

    return (
       <div className="home-container">
      {isLoading ? (
         <p>Loading...</p>
      ):error?(
      <p>Unexpected error occured...</p>
      ):(
        <>
          <h2>New Arrivals</h2>
          <div className="products">
            {data?.map((product) => (
                <div key={product.id} className="product">
                  <h3>{product.name}</h3>
                  <img src={product.image} alt={product.name} />
                  <div className="details">
                    <span>{product.desc}</span>
                    <span className="price">${product.price}</span>
                  </div>
                  <button onClick={() => handleAddToCart(product)}>
                    Add To Cart
                  </button>
                </div>
              ))}
          </div>
        </>
       
      )}
    </div>
    );
  }
export default Home;

