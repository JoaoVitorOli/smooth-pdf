import { ButtonsNextPrev } from './components/ButtonsNextPrev';
import { PagesCount } from './components/PagesCount';
import PdfViewer from './components/PdfViewer';
import { Titlebar } from './components/Titlebar';

function App() {
  return (
    <main className='bg-black pt-9 h-screen rounded-xl border border-gray-50/20 overflow-hidden'>
      <Titlebar />

      <PdfViewer />

      <PagesCount />
      <ButtonsNextPrev />
    </main>
  );
}

export default App;
