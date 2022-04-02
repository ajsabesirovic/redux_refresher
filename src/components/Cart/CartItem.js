import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
const CartItem = (props) => {
  const { title, quantity, total, price, id } = props.item;
  const dispatch = useDispatch();
  const plus = () => {
    dispatch(cartActions.addItem({ title, price, id }));
  };
  const minus = () => {
    dispatch(cartActions.removeItem(id));
  };
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={minus}>-</button>
          <button onClick={plus}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
