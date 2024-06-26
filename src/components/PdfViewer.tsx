'use client';

import * as PdfJs from 'pdfjs-dist';
import { useLayoutEffect, useRef, useState } from 'react';
import pdfFile from '../assets/Test_PDF.pdf';

export default function PdfViewer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const divTextLayerRef = useRef<HTMLDivElement>(null);
  const [scale] = useState(1);

  useLayoutEffect(() => {
    loadPdf();
  }, [canvasRef]);

  async function loadPdf() {
    PdfJs.GlobalWorkerOptions.workerSrc = '../../node_modules/pdfjs-dist/build/pdf.worker.mjs';

    const loadingTask = PdfJs.getDocument(pdfFile);
    const pdf = await loadingTask.promise;

    const page = await pdf.getPage(1);
    const viewport = page.getViewport({ scale });
    const outputScale = window.devicePixelRatio || 1;

    const canvas = canvasRef.current!;
    const context = canvas.getContext('2d');

    canvas.width = Math.floor(viewport.width * outputScale);
    canvas.height = Math.floor(viewport.height * outputScale);

    canvas.style.width = `${viewport.width}px`;
    canvas.style.height = `${viewport.height}px`;

    const transform = outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : null;

    const renderContext = {
      canvasContext: context,
      viewport,
      transform,
    };

    await page.render(renderContext).promise;

    const textContent = await page.getTextContent();

    const textLayerDiv = divTextLayerRef.current!;

    textLayerDiv.style.width = `${viewport.width}px`;
    textLayerDiv.style.height = `${viewport.height}px`;

    const textLayer = new PdfJs.TextLayer({
      textContentSource: textContent,
      container: textLayerDiv,
      viewport: viewport,
    });

    await textLayer.render();
  }

  return (

    <div className='custom-scroll overflow-y-scroll h-full overflow-x-hidden pt-4 pb-12'>
      <div
        id='viewer'
        className='pdfViewer flex w-full items-center justify-center'
        style={{ '--scale-factor': scale } as React.CSSProperties}
      >
        <div className='relative'>
          <div className='canvasWrapper'>
            <canvas ref={canvasRef}></canvas>
          </div>
          <div className='textLayer' ref={divTextLayerRef}></div>
        </div>
      </div>
    </div>
  );
}
