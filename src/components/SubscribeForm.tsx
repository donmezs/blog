import React, { FormEvent, useState } from "react";
import { FormField } from "./FormField";
import { NetlifyForm } from "./NetlifyForm";
import validator from "validator";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function SubscribeForm(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const [email, setEmail] = useState("");
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

    const url = new URL(`https://api.sender.net/v2/subscribers/`);

    let headers = {
      Authorization: `Bearer ${siteConfig.customFields.senderToken as string}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    let data = {
      email: email,
      groups: [`${siteConfig.customFields.senderGroupId as string}`],
      trigger_automation: true,
    };

    var isSubscribed = await fetch(url + email, {
      method: "GET",
      headers,
    }).then((response) => response.json());

    if (isSubscribed.success === undefined) {
      const message = `This email is already subscribed.`;
      toast.warning(message, {
        icon: "👽",

        theme: "colored",
        position: toast.POSITION.BOTTOM_CENTER,
      });
      throw new Error(message);
    }

    var res = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(data),
    });

    setIsProcessing(false);

    if (res.ok) {
      setEmail("");
      toast.success("You're subscribed!", {
        icon: "👍",
        theme: "colored",
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } else {
      const data = await res.json();

      if (Array.isArray(data.errors) && data.errors.length) {
        toast.error(data.errors[0].message, {
          icon: "👎",
          theme: "colored",
          position: toast.POSITION.BOTTOM_CENTER,
        });
      } else {
        toast.error("An error occurred. Please try again later.", {
          icon: "👎",
          theme: "colored",
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    }
  }

  return (
    <>
      <NetlifyForm
        className="row"
        name="subscribe"
        onSubmit={submit}
        style={{ alignItems: "center", textAlign: "center" }}
      >
        <div className="col col--9">
          <FormField
            containerClass="margin-vert--sm"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            type="email"
            value={email}
          />
        </div>
        <div className="col col--3">
          <button
            className="button button--lg button--outline button--primary margin-horiz--auto margin-vert--sm"
            disabled={isProcessing}
            type="submit"
          >
            {isProcessing ? "Subscribing" : "Subscribe"}
          </button>
        </div>
        <ToastContainer />
      </NetlifyForm>
    </>
  );
}
