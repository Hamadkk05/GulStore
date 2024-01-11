import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp";
import "./Search.scss";
const Search = ({ setShowSearch }) => {
  return (
    <div className="search-modal">
      <div className="form-field">
        <input type="text" autoFocus placeholder="Search for products" />
        <MdClose onClick={() => setShowSearch(false)} />
      </div>
      <div className="search-result-contant">
        <div className="search-result">
          <div className="search-result-item">
            <div className="img-container">
              <img src={prod} />
            </div>
            <div className="prod-details">
              <span className="name">Product Name</span>
              <span className="desc">Product desc</span>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
