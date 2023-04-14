import React from "react";
import Layout from "@theme/Layout";
import { Content } from "@theme/BlogPostPage";
import { Hero } from "./Hero";
import { AboutMe } from "./About/AboutMe";

interface HomeProps {
  readonly recentPosts: readonly { readonly content: Content }[];
}

export function Home({ recentPosts }: HomeProps): JSX.Element {
  return (
    <Layout>
      <Hero />
      <div className="container margin-top--xl margin-bottom--lg">
        <AboutMe />
      </div>
    </Layout>
  );
}

// Default export for plugins/blog-plugin.js
export default Home;
