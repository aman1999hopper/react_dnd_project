import React, {useState} from 'react';
import { DndContext } from '@dnd-kit/core';
import DraggableItem from '../DraggableItem/DraggableItem.jsx';
import DroppableArea from '../DroppaleArea/DroppableArea.jsx';
import './DragAndDropContainer.css';

function DragAndDropContainer() {
  // Track the position of draggable items
  const [positions, setPositions] = useState({
    'item-1': { x: 0, y: 0 },
    'item-2': { x: 0, y: 0 },
  });

  const handleDragEnd = (event) => {
    const { active, delta } = event;

    // Update the position of the item based on the drag delta
    setPositions((prevPositions) => ({
      ...prevPositions,
      [active.id]: {
        x: prevPositions[active.id].x + delta.x,
        y: prevPositions[active.id].y + delta.y,
      },
    }));
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="drag-and-drop-container">
        <DroppableArea id="droppable-1">
          <DraggableItem id="item-1" position={positions['item-1']}>Item 1</DraggableItem>
        </DroppableArea>
        <DroppableArea id="droppable-2">
          <DraggableItem id="item-2" position={positions['item-2']}>Item 2</DraggableItem>
        </DroppableArea>
      </div>
    </DndContext>
  );
}

export default DragAndDropContainer;
