import React, { FormEvent, useState } from "react";
import Layout from "@theme/Layout";
import { FormField } from "@site/src/components/FormField";
import { NetlifyForm } from "@site/src/components/NetlifyForm";
import validator from "validator";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

function Contact() {
  const { siteConfig } = useDocusaurusContext();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!validator.isEmail(email)) {
      toast.error("Valid email is required", {
        icon: "👎",
        theme: "colored",
        position: toast.POSITION.BOTTOM_CENTER,
      });
      return;
    }

    setIsProcessing(true);

    var template = {
      name: name,
      email: email,
      message: message,
    };

    var serviceId = siteConfig.customFields.emailJsServiceId as string;
    var templateId = siteConfig.customFields.emailJsTemplateId as string;
    var pk = siteConfig.customFields.emailJsPk as string;

    emailjs.send(serviceId, templateId, template, pk).then(
      (result) => {
        setEmail("");
        setName("");
        setMessage("");
        toast.success("Your message received, thank you!", {
          icon: "👍",
          theme: "colored",
          position: toast.POSITION.BOTTOM_CENTER,
        });
      },
      (error) => {
        toast.error("An error occurred. Please try again later.", {
          icon: "👎",
          theme: "colored",
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    );

    setIsProcessing(false);
  }

  return (
    <Layout title="Contact">
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--6 col--offset-3">
            <h1>Contact Me</h1>
            <p>
              If you have any comments, ideas, critiques, or you just want to
              say hi, don’t hesitate to send me an email at{" "}
              <a href="mailto:sudo@suleymandonmez.dev">
                sudo@suleymandonmez.dev
              </a>{" "}
              or fill the form below!
            </p>
            <NetlifyForm onSubmit={submit} name="contact">
              <FormField
                label="Your Name"
                name="name"
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <FormField
                fieldType="input"
                label="Your Email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                type="email"
              />
              <FormField
                fieldType="textarea"
                label="Message"
                name="message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
              />
              <div className="col" style={{ textAlign: "center" }}>
                <button
                  className="button button--lg button--primary"
                  disabled={isProcessing}
                  type="submit"
                >
                  {isProcessing ? "Sending" : "Send"}
                </button>
              </div>

              <ToastContainer />
            </NetlifyForm>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
