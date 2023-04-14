import OriginalFooter from "@theme-original/Footer";
import React from "react";
import { SubscribeForm } from "../components/SubscribeForm";
import { SocialLinks } from "../components/SocialLink/SocialLinks";

function Footer(props: {}) {
  return (
    <div className="footer-wrapper footer">
      <div className="container margin-top--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div
              className="margin-top--lg"
              style={{
                alignItems: "center",
                display: "flex",
              }}
            >
              <div style={{ flexGrow: 1 }}>
                <h3>Subscribe to the newsletter</h3>
                <p>
                  Get emails from me about web development, tech, and early
                  access to new articles.
                </p>
                <SubscribeForm />
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      </div>
      <OriginalFooter {...props} />
    </div>
  );
}

export default Footer;
