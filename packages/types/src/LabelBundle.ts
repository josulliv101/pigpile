export type LabelBundle = {
  // org
  org: string;
  orgFormal: string;
  tagline: string;
  mission: string;
  platform: string;

  // legal
  copyright: string;

  // common
  admin: string;
  custom: string;
  dark: string;
  donation: string;
  items: string;
  light: string;
  login: string;
  logout: string;
  more: string;
  tip: string;
  buttons: {
    about: string;
    cancel: string;
    confirm: string;
    confirmAdding: string;
    contact: string;
    custom: string;
    donate: string;
    finish: string;
    forgotPassword: string;
    view: string;
    website: string;
  };
  donationItems: {
    1: string;
    default: string;
  };
  forms: {
    anonymous: string;
    anonymousHint: string;
    accountHint: string;
    email: string;
    nameToDisplay: string;
    orContinue: string;
    password: string;
    required: string;
    selectEmoji: string;
  };
  blurbs: {
    finalStep: string;
    freeService: string;
    thankYou: string;
  };
  theme: {
    id: string;
    chesterAnimations: string;
    city: string;
    colorMode: string;
    colorSchemes: string;
    farm: string;
    jump: string;
    options: string;
    wiggle: string;
    wahoo: string;
  };
  campaign: {
    heroTitle: string;
  };
};
