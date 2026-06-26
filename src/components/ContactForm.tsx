import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLang } from "../context/LanguageContext";
import { ArrowIcon } from "./ArrowIcon";

type FormData = {
  name: string;
  email: string;
  projectType: string;
  message: string;
  website: string; // Honeypot field
};

export function ContactForm() {
  const { tr } = useLang();
  const c = tr.contact;
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [rateLimitError, setRateLimitError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ mode: "onTouched" });

  useEffect(() => {
    if (rateLimitError) {
      const timer = setTimeout(() => setRateLimitError(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [rateLimitError]);

  const onSubmit = async (data: FormData) => {
    // 1. Honeypot check: If the hidden 'website' field is filled out, silently reject it (it's a bot)
    if (data.website) {
      console.warn("Bot detected via honeypot.");
      return; 
    }

    // 2. Rate Limiting Check (Frontend)
    const lastSubmitTime = localStorage.getItem("lastContactSubmit");
    if (lastSubmitTime) {
      const timeSinceLastSubmit = Date.now() - parseInt(lastSubmitTime, 10);
      // 60 seconds cooldown
      if (timeSinceLastSubmit < 60000) {
        setRateLimitError("Please wait a minute before sending another message.");
        return;
      }
    }

    setSending(true);
    // Simulate network request
    await new Promise((r) => setTimeout(r, 1000));
    
    // Save submission time
    localStorage.setItem("lastContactSubmit", Date.now().toString());

    setSending(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="contact-success">
        <div className="contact-success-icon">✓</div>
        <h3 className="contact-success-title">{c.successTitle}</h3>
        <p className="contact-success-text">{c.successText}</p>
        <button className="btn btn-primary" onClick={() => { setSubmitted(false); reset(); }}>
          <ArrowIcon />
          {c.sendAnother}
        </button>
      </div>
    );
  }

  return (
    <div className="contact-form-wrap">
      <div className="contact-form-header">
        <h3 className="contact-form-title">{c.formTitle}</h3>
        <p className="contact-form-subtitle">{c.formSubtitle}</p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Honeypot Field - Hidden from humans, visible to bots */}
        <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input type="text" id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
        </div>

        <div className="form-row">
          <div className="form-group floating-group">
            <input
              className={`form-input floating-input${errors.name ? " form-input-error" : ""}`}
              placeholder=" "
              {...register("name", { required: c.errors.nameMin, minLength: { value: 2, message: c.errors.nameMin } })}
            />
            <label className="form-label floating-label">{c.name}</label>
            {errors.name && <p className="form-error">{errors.name.message}</p>}
          </div>
          <div className="form-group floating-group">
            <input
              type="email"
              className={`form-input floating-input${errors.email ? " form-input-error" : ""}`}
              placeholder=" "
              {...register("email", {
                required: c.errors.emailInvalid,
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: c.errors.emailInvalid },
              })}
            />
            <label className="form-label floating-label">{c.email}</label>
            {errors.email && <p className="form-error">{errors.email.message}</p>}
          </div>
        </div>
        <div className="form-group floating-group">
          <select
            className={`form-input form-select floating-input${errors.projectType ? " form-input-error" : ""}`}
            {...register("projectType", { required: c.errors.typeRequired })}
          >
            <option value="" disabled hidden></option>
            {(c.types as readonly string[]).map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          <label className="form-label floating-label">{c.projectType}</label>
          {errors.projectType && <p className="form-error">{errors.projectType.message}</p>}
        </div>
        <div className="form-group floating-group">
          <textarea
            rows={5}
            className={`form-input form-textarea floating-input${errors.message ? " form-input-error" : ""}`}
            placeholder=" "
            {...register("message", { required: c.errors.messageMin, minLength: { value: 10, message: c.errors.messageMin } })}
          />
          <label className="form-label floating-label">{c.message}</label>
          {errors.message && <p className="form-error">{errors.message.message}</p>}
        </div>
        
        {rateLimitError && <p className="form-error" style={{ marginBottom: "16px" }}>{rateLimitError}</p>}
        
        <button type="submit" className="btn btn-cta form-submit" disabled={sending}>
          <ArrowIcon />
          {sending ? c.sending : c.send}
        </button>
      </form>
    </div>
  );
}
