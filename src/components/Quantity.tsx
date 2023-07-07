import { useState } from 'react';
type QuantityProps = {
  quantity: number;
};
const Quantity = ({ quantity }: QuantityProps) => {
  const [quan, setQuan] = useState(quantity);

  return (
    <span className='counter'>
      <button
        className='counter-action increment'
        onClick={() =>
          setQuan((prev) => {
            return prev > 0 ? prev - 1 : 0;
          })
        }
      >
        -
      </button>
      <span className='counter-items'>{quan}</span>
      <button
        className='counter-action decrement'
        onClick={() => setQuan(quan + 1)}
      >
        +
      </button>
    </span>
  );
};

export default Quantity;
