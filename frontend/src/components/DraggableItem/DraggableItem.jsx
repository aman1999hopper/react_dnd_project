import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import './DraggableItem.css';

function DraggableItem({ id, position, children }) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
  
    // Combine the drag transform with the item's current position
    const style = {
      transform: transform
        ? `translate3d(${position.x + transform.x}px, ${position.y + transform.y}px, 0)`
        : `translate3d(${position.x}px, ${position.y}px, 0)`,
    };
  
    return (
      <div ref={setNodeRef} style={style} {...listeners} {...attributes} className="draggable-item">
        {children}
      </div>
    );
  }
  
  export default DraggableItem;
