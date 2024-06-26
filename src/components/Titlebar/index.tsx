import { appWindow } from '@tauri-apps/api/window';
import { Minimize2, Minimize, Maximize, X } from '@geist-ui/icons';
import { useEffect, useState } from 'react';
import { ConfigButton } from './ConfigButton';

export function Titlebar() {
  const [isMaximized, setIsMaximized] = useState(false);

  useEffect(() => {
    const handleWindowMoved = async () => {
      const maximized = await appWindow.isMaximized();
      setIsMaximized(maximized);
    };

    appWindow.onMoved(handleWindowMoved);
  }, []);

  async function handleMinimize() {
    await appWindow.minimize();
  }

  async function handleClose() {
    await appWindow.close();
  }

  return (
    <div
      data-tauri-drag-region
      className="fixed flex top-0 z-50 w-full h-fit bg-[#111] rounded-t-xl"
    >
      <ConfigButton />

      <div className="w-fit h-fit ml-auto">
        <button
          onClick={handleMinimize}
          aria-label="Minimize"
          className='p-2 transition-all duration-200 hover:bg-[#eaeaea]/10'
        >
          <Minimize2 color='#999' size={20} />
        </button>
        <button
          onClick={() => appWindow.toggleMaximize()}
          className='p-2 transition-all duration-200 hover:bg-[#eaeaea]/10'
        >
          {isMaximized ? <Minimize color='#999' size={20} /> : <Maximize color='#999' size={20} />}
        </button>
        <button
          onClick={handleClose}
          aria-label="Close"
          className='p-2 group transition-all duration-200 hover:bg-[#ff1a1a] rounded-tr-lg'
        >
          <X className='stroke-[#999] transition-all duration-200 group-hover:stroke-white' size={20} />
        </button>
      </div>
    </div>
  );
}
