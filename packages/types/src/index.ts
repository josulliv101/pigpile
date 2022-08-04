import { LabelBundleMap } from "./LabelBundle";

export * from "./LabelBundle";
export * from "./Settings";

type Currency = "usd";

export interface Status {
  id?: string;
  status?: "info" | "warning" | "error" | "success";
  title: string;
  description?: string;
  isCloseable?: boolean;
}

export interface Media {
  videoId: string;
  caption?: string;
}

export interface User {
  uid: string;
  displayName: string | null;
  isAnonymous: boolean | null;
  isAdmin?: boolean | null;
}

export interface Organizer {
  displayName: string;
  imageUrl: string;
  isEmployee?: boolean;
}

export interface Organization {
  description: string;
  url?: string;
}

export interface Donation {
  id?: string;
  userId: string;
  displayName: string;
  emoji: string;
  comment: string;
  quantity: number;
  tip: number;
  isAnonymous?: boolean;
  createdAtInMS: number;
}

export type AddedDonation = Omit<Donation, "createdAtInMS"> & {
  campaignId: string;
};

export type Comment = Pick<Donation, "comment" | "displayName" | "emoji" | "createdAtInMS">;

export interface Campaign {
  id: string;
  beneficiary: string;
  createdAtInMS: number;
  organizer: Organizer;
  organization: Organization;
  donation: {
    currency: Currency;
    pricePerUnit: number;
    options: number[];
  };
  campaign: {
    name: string;
    descr: string;
    descrShort: string;
    createdBy: string;
    createdOn: number;
  };
  location: string;
  tags: string[];
  media: Media;
  goal: {
    amount: number;
    type: "FUNDS" | "IN-KIND";
    label: string;
  };
  customLabels: LabelBundleMap;
}

export interface AuthState {
  user?: User | null;
  isReady: boolean;
  error?: string;
}

export interface Provider {
  providerId: string;
}

export interface Layout {
  children: React.ReactNode;
  user: User;
  onLogin: () => void;
  onLogout: () => void;
  onThemeOptionChange: () => void;
}
