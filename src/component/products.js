import React, { useState } from "react";

function Products() {
  let [price, setprice] = useState(0);
  const info = {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: {
      rate: 4.7,
      count: 500,
    },
  };
  const handleClickAdd = () => {
    setprice(price + 1);
  };

  const handleClickSub = () => {
    setprice(price - 1);
  };
  return (
    <div>
      <div className="">
        <img
          src={info.image}
          alt={info.title}
          style={{ height: 100, width: 100 }}
        />
        <div>
            <h4>{info.category}</h4>
            <h1>{info.title}</h1>
            <p>Rateing {info.rating.rate}</p>
            <h3>Price {info.price}</h3>
            <p>{info.description}</p>
            <div className=" w-48 flex justify-evenly items-center">
                <button className="font-extrabold bg-indigo-500 w-12 h-8 rounded-full hover:bg-indigo-600" onClick={handleClickAdd}>+</button>
                <p>{price*info.price} {price===0?true:<p>for {price} iteam</p>}</p>
                <button className="font-extrabold bg-indigo-500 w-12 h-8 rounded-full hover:bg-indigo-600" onClick={handleClickSub}>-</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
