import pord from "../../../assets/products/earbuds-prod-1.webp"
import "./Product.scss";
const Product = () => {
    return <div className="product-card">
        <div className="thumbnail">
            <img src={pord}/>
        </div>
        <div className="prod-details">
            <span className="name">Product name</span>
            <span className="price">&#8377;399</span>
        </div>
    </div>;
};

export default Product;
