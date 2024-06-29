import Loading from '@geist-ui/core/esm/loading';
import { ButtonsNextPrev } from './components/ButtonsNextPrev';
import { PagesCount } from './components/PagesCount';
import { Titlebar } from './components/Titlebar';
import { Suspense, lazy } from 'react';
const PdfViewer = lazy(() => import('./components/PdfViewer'));

function App() {

  return (
    <main className='bg-black pt-9 h-screen rounded-xl border border-gray-50/20 overflow-hidden'>
      <Titlebar />

      <Suspense fallback={<Loading scale={2} />}>
        <PdfViewer />
      </Suspense>

      <PagesCount />
      <ButtonsNextPrev />
    </main>
  );
}

export default App;
