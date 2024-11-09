import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import './DroppableArea.css';

function DroppableArea({ id, children }) {
  const { isOver, setNodeRef } = useDroppable({ id });

  const style = {
    backgroundColor: isOver ? 'lightblue' : 'lightgray',
  };

  return (
    <div ref={setNodeRef} style={style} className="droppable-area">
      {children}
    </div>
  );
}

export default DroppableArea;
