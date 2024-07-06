import React, { useState } from 'react';
import Draggable from './Draggable';
import './App.css';

const App = () => {
  const initialSize = { width: 200, height: 200 };
  const [draggables, setDraggables] = useState([
    <Draggable key={0} width={initialSize.width} height={initialSize.height} />
  ]);
console.log(draggables)
  const addParent = () => {
    const newSize = {
      width: draggables[0].props.width + 50,
      height: draggables[0].props.height + 70,
    };
    const newDraggable = (
      <Draggable key={draggables.length} width={newSize.width} height={newSize.height}>
        {draggables}
      </Draggable>
    );
    setDraggables([newDraggable]);
  };

  return (
    <div className="App">
      <button onClick={addParent}>Add Parent</button>
      <div className="draggable-container">
        {draggables}
      </div>
    </div>
  );
};

export default App;