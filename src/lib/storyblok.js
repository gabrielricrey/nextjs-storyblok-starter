import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";

import Page from "@/components/sb/Page";
import Grid from "@/components/sb/Grid";
import DoesNotExist from "@/components/sb/DoesNotExist";
import Hero from "@/components/sb/Hero";
import Section from "@/components/sb/Section";
import SectionHeader from "@/components/sb/SectionHeader";
import Card from "@/components/sb/Card";
import Navbar from "@/components/sb/Navbar";
import Logo from "@/components/sb/Logo";
import LinkGroup from "@/components/sb/LinkGroup";
import NavLink from "@/components/sb/NavLink";
import Button from "@/components/sb/Button";
import BtnGroup from "@/components/sb/BtnGroup";
import Footer from "@/components/sb/Footer";
import FooterGrid from "@/components/sb/FooterGrid";
export const components = {
  // Add your components here
  page: Page,
  navbar: Navbar,
  logo: Logo,
  link_group: LinkGroup,
  nav_link: NavLink,
  section: Section,
  section_header: SectionHeader,
  grid: Grid,
  card: Card,
  hero: Hero,
  button: Button,
  btn_group: BtnGroup,
  footer: Footer,
  footer_grid: FooterGrid,
  doesNotExist: DoesNotExist,
};

/**
 * Get the Storyblok API exports a StoryblokApi object to be used in the application
 * @returns {StoryblokApi}
 */
export const getStoryblokApi = storyblokInit({
  accessToken:
    process.env.STORYBLOK_DELIVERY_API_ACCESS_TOKEN ||
    process.env.NEXT_PUBLIC_STORYBLOK_DELIVERY_API_ACCESS_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: "eu",
  },
  components,
});
