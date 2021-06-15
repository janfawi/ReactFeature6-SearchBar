// Styling
import { ProductWrapper } from "../styles";
import SearchBar from "./SearchBar";

const ProductItem = (props) => {
  const product = props.product;

  return (
    <div>
      <searchBar />
      <ProductWrapper>
        <img alt={product.name} src={product.image} />
        <p>{product.name}</p>
        <p className="product-price">{product.price} KD</p>
      </ProductWrapper>{" "}
    </div>
  );
};

export default ProductItem;
