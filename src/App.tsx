import PdfViewer from './components/PdfViewer';
import { Titlebar } from './components/Titlebar';

function App() {
  return (
    <main className='bg-black pt-9 h-screen rounded-xl border border-gray-50/20 overflow-hidden'>
      <Titlebar />

      <PdfViewer />
    </main>
  );
}

export default App;
