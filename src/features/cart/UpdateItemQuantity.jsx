import { useDispatch, useSelector } from 'react-redux';

import Button from '../../ui/Button';
import { decreaseItemQuantity, increseItemQuantity } from './cartSlice';

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  // eventHandlers

  function handleDecrease() {
    dispatch(decreaseItemQuantity(pizzaId));
  }

  function handleIncrease() {
    dispatch(increseItemQuantity(pizzaId));
  }

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button type="round" onClick={handleDecrease}>
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button type="round" onClick={handleIncrease}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
