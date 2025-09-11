import React from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  MessageCircle,
  Send,
  Mail,
  Link as LinkIcon,
} from "lucide-react";

// Tiny Reddit logo (inline SVG) to avoid depending on a missing lucide icon
function RedditLogo({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M14.5 3a1 1 0 0 0-1 1v2.09a7.9 7.9 0 0 0-1.5-.14c-4.14 0-7.5 2.69-7.5 6 0 1.78 1.02 3.38 2.64 4.48C7.33 18.46 9.53 19 12 19s4.67-.54 4.86-.57C18.98 16.33 20 14.73 20 13c0-3.04-2.87-5.55-6.53-5.94V4a1 1 0 0 0-1-1Zm-6 8a1.25 1.25 0 1 1 0 2.5A1.25 1.25 0 0 1 8.5 11Zm7 0a1.25 1.25 0 1 1 0 2.5A1.25 1.25 0 0 1 15.5 11ZM9.2 15.7a.75.75 0 0 1 1.06.1c.4.48 1.11.8 1.74.8s1.34-.32 1.74-.8a.75.75 0 0 1 1.16.96c-.69.83-1.86 1.34-2.9 1.34s-2.21-.51-2.9-1.34a.75.75 0 0 1 .1-1.06Z" />
      <circle cx="18.5" cy="6.5" r="1.5" />
    </svg>
  );
}

export default function ShareBar() {
  const href = typeof window !== "undefined" ? window.location.href : "";
  const text = typeof document !== "undefined" ? document.title : "Check this out";
  const u = encodeURIComponent(href);
  const t = encodeURIComponent(text);

  const open = (link: string) => window.open(link, "_blank", "noopener,noreferrer");
  const btn = "p-2 rounded-full border border-slate-300 hover:bg-slate-100 transition-colors";

  return (
    <div className="no-print my-8 flex flex-wrap gap-3">
      <button onClick={() => open(`https://www.facebook.com/sharer/sharer.php?u=${u}`)} className={btn} aria-label="Share on Facebook">
        <Facebook size={18} className="text-blue-600" />
      </button>
      <button onClick={() => open(`https://twitter.com/intent/tweet?url=${u}&text=${t}`)} className={btn} aria-label="Share on X">
        <Twitter size={18} className="text-sky-500" />
      </button>
      <button onClick={() => open(`https://www.linkedin.com/sharing/share-offsite/?url=${u}`)} className={btn} aria-label="Share on LinkedIn">
        <Linkedin size={18} className="text-blue-700" />
      </button>
      <button onClick={() => open(`https://www.reddit.com/submit?url=${u}&title=${t}`)} className={btn} aria-label="Share on Reddit">
        <RedditLogo size={18} className="text-orange-600" />
      </button>
      <button onClick={() => open(`https://api.whatsapp.com/send?text=${t}%20${u}`)} className={btn} aria-label="Share on WhatsApp">
        <MessageCircle size={18} className="text-green-600" />
      </button>
      <button onClick={() => open(`https://t.me/share/url?url=${u}&text=${t}`)} className={btn} aria-label="Share on Telegram">
        <Send size={18} className="text-sky-600" />
      </button>
      <a href={`mailto:?subject=${t}&body=${u}`} className={btn} aria-label="Share via Email">
        <Mail size={18} className="text-rose-600" />
      </a>
      <button onClick={() => navigator.clipboard?.writeText(href)} className={btn} aria-label="Copy Link">
        <LinkIcon size={18} className="text-slate-600" />
      </button>
    </div>
  );
}
