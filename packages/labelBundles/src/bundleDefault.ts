import { LabelBundleType } from "./LabelBundleType";

export const defaultLabelBundle: LabelBundleType = {
  // org
  org: "Pigpile",
  orgFormal: "Pigpile Corporation",
  tagline: "Pigpile on good causes",
  mission: "Our mission is to inspire giving and help good causes raise funds/in-kind donations",
  platform: "an online fund-raising platform",
  address: "1770 Massachusetts Ave, Cambridge, MA 02140, suite 128",

  // legal
  copyright: "All rights reserved.",

  // common
  admin: "admin",
  // custom: "Custom",
  dark: "Dark",
  donation: "donation",
  items: "Items",
  light: "Light",
  login: "Login",
  logout: "Logout",
  more: "more",
  tip: "tip",
  donationItems: {
    default: "pairs of socks",
    1: "pair of socks",
    short: "socks",
  },
  buttons: {
    about: "About",
    cancel: "Cancel",
    confirm: "Confirm",
    confirmAdding: "Confirm Adding {} Item(s)",
    contact: "Contact",
    // custom: "Custom",
    donate: "Donate Now",
    finish: "Finish",
    forgotPassword: "Forgot Password",
    view: "View",
    website: "Visit Website",
  },
  forms: {
    anonymous: "Anonymous",
    anonymousHint: "Don't display my name on the site",
    accountHint: "Don't have an account",
    email: "Email",
    nameToDisplay: "Name to display",
    orContinue: "or continue with",
    password: "Password",
    required: "Required",
    selectEmoji: "Select Your Emoji",
  },
  blurbs: {
    finalStep: "Thank you! One final step below.",
    freeService:
      "We're a free service and rely on donor love. Any contribution is appreciated. Include a tip of",
    thankYou: "Thank you so much for supporting this pigpile",
  },
  theme: {
    id: "Theme",
    chesterAnimations: "Chester's click animation",
    city: "City",
    colorMode: "Color Mode",
    colorSchemes: "Color Schemes",
    farm: "Farm",
    jump: "Jump",
    options: "Options",
    wiggle: "Wiggle",
    wahoo: "Wahoo",
  },
  campaign: {
    heroTitle: "Help us donate {{amount}} {{itemType}} to {{org}}",
  },
};
