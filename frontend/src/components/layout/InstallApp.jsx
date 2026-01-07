import { useEffect, useState } from "react";

let deferredPrompt;

const InstallApp = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      deferredPrompt = e;
      setShow(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const installApp = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const result = await deferredPrompt.userChoice;

    if (result.outcome === "accepted") {
      console.log("User installed the app");
    }

    deferredPrompt = null;
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-5 left-5 right-5 bg-black text-white p-4 rounded-xl flex justify-between items-center z-50 shadow-lg">
      <span>📲 Install Fancy Collection App</span>
      <button
        onClick={installApp}
        className="bg-orange-500 px-4 py-2 rounded-lg"
      >
        Install
      </button>
    </div>
  );
};

export default InstallApp;
