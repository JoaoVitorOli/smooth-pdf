import { Titlebar } from './components/Titlebar';

function App() {
  return (
    <main className='bg-black h-screen rounded-lg border border-gray-50/20'>
      <Titlebar />

      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </main>
  );
}

export default App;
