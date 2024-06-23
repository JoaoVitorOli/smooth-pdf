import { appWindow } from '@tauri-apps/api/window';
import { Minimize2, Minimize, Maximize, X } from '@geist-ui/icons';
import { useEffect, useState } from 'react';

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
      className="relative h-7 w-full bg-red-300"
    >
      <div className="absolute right-0">
        <button onClick={handleMinimize} aria-label="Minimize">
          <Minimize2 />
        </button>
        <button onClick={() => appWindow.toggleMaximize()}>
          {isMaximized ? <Minimize /> : <Maximize />}
        </button>
        <button onClick={handleClose} aria-label="Close">
          <X />
        </button>
      </div>
    </div>
  );
}
