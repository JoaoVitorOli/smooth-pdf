export interface PdfConfigProps {
  zoom: Zoom;
  page: number;
}

export type Zoom = 0.2 | 0.4 | 0.6 | 0.8 | 1 | 1.2 | 1.4 | 1.6 | 1.8 | 2;