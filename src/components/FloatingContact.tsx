"use client";

import { Mail, MessageCircle, Phone, X } from "lucide-react";
import { useState } from "react";

const pendingChannels = ["WA", "TG", "FB", "MS", "IG"];

export function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <aside aria-label="Quick contact" className={`contact-dock ${open ? "is-open" : ""}`}>
      <div className="contact-dock-actions" id="contact-dock-actions">
        {pendingChannels.map((channel) => (
          <button
            aria-disabled="true"
            aria-label={`${channel} destination to be confirmed`}
            className="dock-action dock-action-pending"
            key={channel}
            title="Destination to be confirmed"
            type="button"
          >
            {channel}
          </button>
        ))}
        <a aria-label="Email Comwerkz" className="dock-action" href="mailto:sales@comwerkz.com.sg">
          <Mail aria-hidden="true" size={20} />
        </a>
        <a aria-label="Call Comwerkz" className="dock-action dock-action-live" href="tel:+6562666988">
          <Phone aria-hidden="true" size={20} />
        </a>
      </div>
      <button
        aria-controls="contact-dock-actions"
        aria-expanded={open}
        aria-label={open ? "Close quick contact options" : "Open quick contact options"}
        className="dock-toggle"
        onClick={() => setOpen((value) => !value)}
        type="button"
      >
        {open ? <X aria-hidden="true" size={22} /> : <MessageCircle aria-hidden="true" size={22} />}
        <span>{open ? "Close" : "Contact"}</span>
      </button>
    </aside>
  );
}
