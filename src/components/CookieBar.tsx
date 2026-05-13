import { useEffect, useState } from "react";

export function CookieBar() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!localStorage.getItem("agricones-cookies")) setShow(true);
  }, []);
  if (!show) return null;
  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-6 md:right-6 z-40 bg-white border border-border shadow-2xl rounded-lg p-4 md:p-5 flex flex-col md:flex-row items-start md:items-center gap-4 max-w-[1180px] md:mx-auto">
      <p className="text-sm text-charcoal flex-1">
        We use cookies to improve your browsing experience and analyze site traffic.
        By continuing, you agree to our use of cookies.
      </p>
      <div className="flex gap-2 self-end md:self-auto">
        <button
          onClick={() => { localStorage.setItem("agricones-cookies", "declined"); setShow(false); }}
          className="px-4 py-2 text-sm border border-border rounded hover:bg-cream"
        >
          Decline
        </button>
        <button
          onClick={() => { localStorage.setItem("agricones-cookies", "accepted"); setShow(false); }}
          className="btn-primary !py-2 !px-4 !text-xs"
        >
          Accept All
        </button>
      </div>
    </div>
  );
}
