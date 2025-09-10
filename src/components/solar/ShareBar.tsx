import React from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Reddit,
  MessageCircle,
  Send,
  Mail,
  Link as LinkIcon,
} from "lucide-react";

export default function ShareBar() {
  const href = typeof window !== "undefined" ? window.location.href : "";
  const text = document?.title || "Check this out";
  const u = encodeURIComponent(href);
  const t = encodeURIComponent(text);

  const open = (link: string) =>
    window.open(link, "_blank", "noopener,noreferrer");

  const btn =
    "p-2 rounded-full border border-slate-300 hover:bg-slate-100 transition-colors";

  return (
    <div className="no-print my-8 flex flex-wrap gap-3">
      <button
        onClick={() =>
          open(`https://www.facebook.com/sharer/sharer.php?u=${u}`)
        }
        className={btn}
        aria-label="Share on Facebook"
      >
        <Facebook size={18} className="text-blue-600" />
      </button>
      <button
        onClick={() =>
          open(`https://twitter.com/intent/tweet?url=${u}&text=${t}`)
        }
        className={btn}
        aria-label="Share on X"
      >
        <Twitter size={18} className="text-sky-500" />
      </button>
      <button
        onClick={() =>
          open(`https://www.linkedin.com/sharing/share-offsite/?url=${u}`)
        }
        className={btn}
        aria-label="Share on LinkedIn"
      >
        <Linkedin size={18} className="text-blue-700" />
      </button>
      <button
        onClick={() =>
          open(`https://www.reddit.com/submit?url=${u}&title=${t}`)
        }
        className={btn}
        aria-label="Share on Reddit"
      >
        <Reddit size={18} className="text-orange-600" />
      </button>
      <button
        onClick={() =>
          open(`https://api.whatsapp.com/send?text=${t}%20${u}`)
        }
        className={btn}
        aria-label="Share on WhatsApp"
      >
        <MessageCircle size={18} className="text-green-600" />
      </button>
      <button
        onClick={() => open(`https://t.me/share/url?url=${u}&text=${t}`)}
        className={btn}
        aria-label="Share on Telegram"
      >
        <Send size={18} className="text-sky-600" />
      </button>
      <a
        href={`mailto:?subject=${t}&body=${u}`}
        className={btn}
        aria-label="Share via Email"
      >
        <Mail size={18} className="text-rose-600" />
      </a>
      <button
        onClick={() => navigator.clipboard?.writeText(href)}
        className={btn}
        aria-label="Copy Link"
      >
        <LinkIcon size={18} className="text-slate-600" />
      </button>
    </div>
  );
}
