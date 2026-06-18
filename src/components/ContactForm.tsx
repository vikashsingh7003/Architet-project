import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLang } from "../context/LanguageContext";
import { ArrowIcon } from "./ArrowIcon";

type FormData = {
  name: string;
  email: string;
  projectType: string;
  message: string;
};

export function ContactForm() {
  const { tr } = useLang();
  const c = tr.contact;
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ mode: "onTouched" });

  const onSubmit = async (_data: FormData) => {
    setSending(true);
    await new Promise((r) => setTimeout(r, 1000));
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
        <button type="submit" className="btn btn-cta form-submit" disabled={sending}>
          <ArrowIcon />
          {sending ? c.sending : c.send}
        </button>
      </form>
    </div>
  );
}
