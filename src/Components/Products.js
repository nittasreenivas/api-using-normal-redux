import { useEffect } from "react";
import { connect } from "react-redux";

const Products = (props) => {
  console.log(props);
  const url = "https://fakestoreapi.com/products";
  const getProducts = async (api) => {
    let response = await fetch(api);
    let data = await response.json();
    console.log(data);
    props.dispatch({
      type: "FETCH_PRODUCTS",
      payload: data
    });
  };
  useEffect(() => {
    getProducts(url);
  }, []);
  const handleDelete = (id) => {
    props.dispatch({
      type: "DELETE_PRODUCT",
      payload: id
    });
  };
  return (
    <div>
      {props.product.products.map((item) => {
        const { id, title, image, description } = item;
        return (
          <div key={id} className="phones">
            <h3> {title} </h3>
            <img alt={title} src={image} width={201} />
            <p> {description} </p>
            <button onClick={() => handleDelete(id)}> Delete </button>
          </div>
        );
      })}
    </div>
  );
};

export default connect(function (store) {
  return store;
})(Products);
