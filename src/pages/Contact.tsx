import { useState, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <>
      {/* Hero Banner */}
      <section
        className="py-5 hero-section"
      >
        <div className="container py-5 ">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="section-title text-gold-gradient">Get In Touch</h1>
              <div className="luxury-divider"></div>
              <p className="section-subtitle mt-4">
                Let's discuss your next project
              </p>
            </div>
          </div>
        </div>
        <div
          className="position-absolute"
          style={{
            top: "25%",
            right: "10%",
            width: "300px",
            height: "300px",
            border: "1px solid var(--luxury-gold)",
            opacity: 0.2,
            transform: "rotate(45deg)",
          }}
        />
        <div
          className="position-absolute"
          style={{
            bottom: "15%",
            right: "15%",
            width: "200px",
            height: "200px",
            border: "1px solid var(--luxury-silver)",
            opacity: 0.2,
            transform: "rotate(45deg)",
          }}
        />
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container">
          <div className="row g-5">
            {/* Contact Info */}
            <div className="col-lg-5">
              <h3
                className="text-gold mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Contact Information
              </h3>
              <p className="text-silver mb-5">
                Feel free to reach out to me for any inquiries, project
                discussions, or just to say hello. I'm always excited to connect
                with new people and explore new opportunities.
              </p>

              <div className="mb-4">
                <div className="d-flex align-items-start mb-4">
                  <div
                    className="d-flex align-items-center justify-content-center me-4"
                    style={{
                      width: "50px",
                      height: "50px",
                      border: "1px solid var(--luxury-gold)",
                      color: "var(--luxury-gold)",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-gold mb-1">Email</h5>
                    <p className="text-silver mb-0">abdullahkhaled@gmail.com</p>
                  </div>
                </div>

                <div className="d-flex align-items-start mb-4">
                  <div
                    className="d-flex align-items-center justify-content-center me-4"
                    style={{
                      width: "50px",
                      height: "50px",
                      border: "1px solid var(--luxury-gold)",
                      color: "var(--luxury-gold)",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-gold mb-1">Location</h5>
                    <p className="text-silver mb-0">Giza, Egypt</p>
                  </div>
                </div>

                <div className="d-flex align-items-start">
                  <div
                    className="d-flex align-items-center justify-content-center me-4"
                    style={{
                      width: "50px",
                      height: "50px",
                      border: "1px solid var(--luxury-gold)",
                      color: "var(--luxury-gold)",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1H8a.5.5 0 0 1-.5-.5v-3.5A.5.5 0 0 1 8 4z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-gold mb-1">Availability</h5>
                    <p className="text-silver mb-0">
                      Mon - Fri, 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div
                className="mt-5 pt-4"
                style={{ borderTop: "1px solid var(--luxury-black-lighter)" }}
              >
                <h5 className="text-gold mb-3">Follow Me</h5>
                <div className="d-flex gap-3">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      width: "45px",
                      height: "45px",
                      border: "1px solid var(--luxury-silver)",
                      color: "var(--luxury-silver)",
                      transition: "var(--transition-fast)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--luxury-gold)";
                      e.currentTarget.style.color = "var(--luxury-gold)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor =
                        "var(--luxury-silver)";
                      e.currentTarget.style.color = "var(--luxury-silver)";
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      width: "45px",
                      height: "45px",
                      border: "1px solid var(--luxury-silver)",
                      color: "var(--luxury-silver)",
                      transition: "var(--transition-fast)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--luxury-gold)";
                      e.currentTarget.style.color = "var(--luxury-gold)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor =
                        "var(--luxury-silver)";
                      e.currentTarget.style.color = "var(--luxury-silver)";
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      width: "45px",
                      height: "45px",
                      border: "1px solid var(--luxury-silver)",
                      color: "var(--luxury-silver)",
                      transition: "var(--transition-fast)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--luxury-gold)";
                      e.currentTarget.style.color = "var(--luxury-gold)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor =
                        "var(--luxury-silver)";
                      e.currentTarget.style.color = "var(--luxury-silver)";
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-7">
              <div className="luxury-card p-4 p-md-5">
                <h3
                  className="text-gold mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Send Me a Message
                </h3>

                {submitSuccess && (
                  <div
                    className="mb-4 p-3"
                    style={{
                      background: "rgba(212, 175, 55, 0.1)",
                      border: "1px solid var(--luxury-gold)",
                    }}
                  >
                    <p className="text-gold mb-0">
                      ✓ Thank you! Your message has been sent successfully. I'll
                      get back to you soon.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <label className="form-label text-silver">Name</label>
                      <input
                        type="text"
                        name="name"
                        className={`form-control luxury-input ${
                          errors.name ? "border-danger" : ""
                        }`}
                        placeholder="Abdullah Khaled"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      {errors.name && (
                        <small className="text-danger">{errors.name}</small>
                      )}
                    </div>

                    <div className="col-md-6">
                      <label className="form-label text-silver">Email</label>
                      <input
                        type="email"
                        name="email"
                        className={`form-control luxury-input ${
                          errors.email ? "border-danger" : ""
                        }`}
                        placeholder="artiger@example.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && (
                        <small className="text-danger">{errors.email}</small>
                      )}
                    </div>

                    <div className="col-12">
                      <label className="form-label text-silver">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        className={`form-control luxury-input ${
                          errors.subject ? "border-danger" : ""
                        }`}
                        placeholder="Project Inquiry"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                      {errors.subject && (
                        <small className="text-danger">{errors.subject}</small>
                      )}
                    </div>

                    <div className="col-12">
                      <label className="form-label text-silver">Message</label>
                      <textarea
                        name="message"
                        className={`form-control luxury-input ${
                          errors.message ? "border-danger" : ""
                        }`}
                        rows={5}
                        placeholder="Tell me about your project..."
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                      {errors.message && (
                        <small className="text-danger">{errors.message}</small>
                      )}
                    </div>

                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn btn-luxury-gold w-100"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
