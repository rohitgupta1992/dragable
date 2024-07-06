import React, { useState, useRef, useEffect } from 'react';
import './Draggable.css';

const Draggable = ({ children, width, height }) => {
  const dragRef = useRef(null);
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const onMouseDown = (e) => {
    setDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const onMouseMove = (e) => {
    if (dragging) {
      const newX = e.clientX - offset.x;
      const newY = e.clientY - offset.y;

      // Calculate bounds
      const parentRect = dragRef.current.parentElement.getBoundingClientRect();
      const elementRect = dragRef.current.getBoundingClientRect();

      const boundedX = Math.min(
        Math.max(newX, parentRect.left),
        parentRect.right - elementRect.width
      );
      const boundedY = Math.min(
        Math.max(newY, parentRect.top),
        parentRect.bottom - elementRect.height
      );

      setPosition({
        x: boundedX - parentRect.left,
        y: boundedY - parentRect.top,
      });
    }
  };

  const onMouseUp = () => {
    setDragging(false);
  };

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, [dragging, offset]);

  return (
    <div
      ref={dragRef}
      className="draggable"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <div className="title-bar" onMouseDown={onMouseDown}>
        Title
      </div>
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default Draggable;