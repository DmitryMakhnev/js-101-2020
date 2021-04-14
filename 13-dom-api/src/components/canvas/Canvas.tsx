import React, { useEffect, useRef, useState } from 'react';

export const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [xyShift, setXYShift] = useState(10);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setXYShift(parseInt(e.target.value, 10));
  };

  const canvasContextRef = useRef<{context: CanvasRenderingContext2D|null}>({ context: null });
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const canvasContext = canvas.getContext('2d');
      canvasContextRef.current.context = canvasContext;
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const canvasContext = canvasContextRef.current.context;
      if (canvasContext) {
        canvasContext.clearRect(0, 0, canvas.width, canvas.height);

        canvasContext.beginPath();
        canvasContext.rect(10 + xyShift, 10 + xyShift, 30, 20);
        canvasContext.fillStyle = '#f00';
        canvasContext.strokeStyle = '#000'
        canvasContext.stroke();
        canvasContext.fill();

      }
    }
  }, [xyShift]);

  return (
    <div>
      <input type="range" min="10" max="50" onChange={onChange} value={xyShift} />

      <hr/>

      <canvas width="400" height="400" ref={canvasRef} />
    </div>
  )
}
