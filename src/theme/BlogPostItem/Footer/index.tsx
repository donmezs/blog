import React from "react";
import Head from "@docusaurus/Head";
import { useBlogPost } from "@docusaurus/theme-common/internal";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Footer from "@theme-original/BlogPostItem/Footer";
import { useColorMode } from "@docusaurus/theme-common";
import Giscus from "@giscus/react";
import { LinkedInLink } from "../../../components/LinkedInLink";

export default function FooterWrapper(props: {}) {
  const { siteConfig } = useDocusaurusContext();
  const { metadata, isBlogPostPage } = useBlogPost();
  const { colorMode } = useColorMode();

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
      </Head>
      <Footer {...props} />
      <div className="margin-vert--xl">
        <Giscus
          id="comments"
          repo={`${siteConfig.organizationName}/${siteConfig.projectName}`}
          repoId={siteConfig.customFields.giscusProjectId as string}
          category={siteConfig.customFields.giscusDiscussionCategory as string}
          categoryId={
            siteConfig.customFields.giscusDiscussionCategoryId as string
          }
          mapping="title"
          reactionsEnabled="0"
          emitMetadata="0"
          inputPosition="top"
          theme={colorMode}
          lang="en"
          loading="eager"
        />
      </div>
      <div
        className="margin-vert--lg"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LinkedInLink
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
            `${siteConfig.url}${metadata.permalink}`
          )}&title=${encodeURIComponent(
            `I just read "${metadata.title}" by Suleyman Donmez`
          )}`}
          title="Share on LinkedIn"
        />
      </div>
    </>
  );
}
