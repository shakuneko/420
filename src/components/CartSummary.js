import { useState, useContext } from "react";
import { Badge } from "antd";
import { CartIcon } from "./Icon";
import CartModal from "./CartModal";
import { StoreContext } from "../store"
import { Link } from "react-router-dom";

export default function CartSummary() {

  const { state: { cartItems } } = useContext(StoreContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => setIsModalVisible(!isModalVisible);

  const count = (cartItems.length > 0) ?
    cartItems.reduce((sum, item) => sum + item.qty, 0)
    : 0;
    
  return (
    <>
       <Link to="/shopping"  >
        <Badge count={count} size={"small"} style={{ color: 'white', backgroundColor: '#FFC72D' }}>
          <CartIcon size={20}/>
        </Badge>
        
      </Link>
      {/* <CartModal
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
      /> */}
    </>
  );
}