import React from "react";
import { useDispatch, useSelector } from 'react-redux';

import ProductCard from './ProductCard';
import { addEmplAction, clearEmplAction, decrEmplAction, dellEmplAction, incrEmplAction, returnDefaultEmplAction } from './store/emplReducer';

import './Cards.css';


function App() {
  const empl = useSelector((state) => state.empl);

  const dispatch = useDispatch();
  function addEmpl(e) {
    if (e.key === 'Enter') {
      const product = {
        id: Date.now(),
        name: e.target.value,
        count: 1
      }
      dispatch(addEmplAction(product))
      e.target.value = null;
    }
  }
  const removeEmpl = (empl) => { dispatch(dellEmplAction(empl.id)) }

  
  return (
    <div>
      <div className="control-panel">
        <div className="control-panel__buttons-wrapper">
          <button onClick={() => dispatch(returnDefaultEmplAction())}>Значения по умолчанию</button>
          <button onClick={() => dispatch(clearEmplAction())}>Очистить все</button>
        </div>
        <input placeholder='Введите название товара..' onKeyDown={(e) => addEmpl(e)}/>
      </div>

      <div className='cards'>
        {empl.map((elem) =>
          <ProductCard
            key={elem.id}
            elem={elem}
            removeEmpl={()=>removeEmpl(elem)}
            incrEmplAction={()=>dispatch(incrEmplAction(elem))}
            decrEmplAction={()=>dispatch(decrEmplAction(elem))}
          />
        )}
      </div>
    </div>
  );
}

export default App;
