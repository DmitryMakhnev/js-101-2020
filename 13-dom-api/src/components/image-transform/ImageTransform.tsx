import React, { useRef } from 'react';

export const ImageTransform = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imageFile = e.target?.files?.[0];
    if (imageFile) {
      const fileReader = new FileReader();
      fileReader.addEventListener('load', () => {
        const image = new Image();
        image.addEventListener('load', () => {
          const canvas = canvasRef.current;
          if (canvas) {
            canvas.width = image.width;
            canvas.height = image.height;
            const canvasContext = canvas.getContext('2d');
            if (canvasContext) {
              canvasContext.translate(image.width, 0);
              canvasContext.scale(-1, 1);
              canvasContext.drawImage(image, 0, 0, image.width, image.height);
            }
            canvas.toBlob(blob => {
              fetch('/api/saveFile', {
                method: 'POST',
                body: blob
              }).then(response => {
                console.log(response);
              })
            });
          }
        });
        image.src = fileReader.result as string;
      });
      fileReader.readAsDataURL(imageFile);
    }
  };

  return (
    <div>
      <input type="file" onInput={onChange} accept=".jpg,.jpeg,.png" />

      <hr/>

      <canvas ref={canvasRef} />
    </div>
  )
}
