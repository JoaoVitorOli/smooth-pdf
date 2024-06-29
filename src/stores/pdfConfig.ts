import { atom } from 'nanostores';
import { PdfConfigProps, Zoom } from '../@types/pdfConfig';

export const $pdfConfig = atom<PdfConfigProps>({
  page: 1,
  zoom: 1
});

export function zoomIn() {
  const actualZoom = $pdfConfig.get().zoom;

  if (actualZoom < 2) {
    const sum = (actualZoom + 0.2) as Zoom;

    $pdfConfig.set({
      zoom: sum,
      page: $pdfConfig.get().page
    });
  }
}

export function zoomOut() {
  const actualZoom = $pdfConfig.get().zoom;

  if (actualZoom > 0.2) {
    const sub = (actualZoom - 0.2) as Zoom;

    $pdfConfig.set({
      zoom: sub,
      page: $pdfConfig.get().page
    });
  }
}