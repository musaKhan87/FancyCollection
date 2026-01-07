import { useEffect, useState } from "react";

export default function InstallApp() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShow(true);

      // Auto hide after 10 seconds
      setTimeout(() => {
        setShow(false);
      }, 10000);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const installApp = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      setShow(false);
    }
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 bg-black text-white p-4 rounded-xl flex justify-between items-center shadow-lg lg:hidden z-50">
      <span>📲 Install this app for better experience</span>
      <button
        onClick={installApp}
        className="bg-orange-500 px-4 py-2 rounded-lg text-white"
      >
        Install
      </button>
    </div>
  );
}
