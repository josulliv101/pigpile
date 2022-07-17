export * from "./LabelBundle";

export interface User {
  uid: string;
  displayName: string | null;
  isAnonymous: boolean | null;
  isAdmin?: boolean | null;
}

export interface Campaign {
  id: string;
  beneficiary: {
    name: string;
    descr: string;
  };
  campaign: {
    name: string;
    descr: string;
    descrShort: string;
    createdBy: string;
    createdOn: number;
  };
  location: {
    city: string;
    state: string;
    country: string;
  };
  tags: string[];
  media: {
    imageUri: string;
    video: {
      id: string | number;
      type: "WISTIA" | "YOUTUBE";
    };
  };
  goal: {
    amount: number;
    type: "FUNDS" | "IN-KIND";
    label: string;
  };
}

export interface AuthState {
  user?: User | null;
  isReady: boolean;
  error?: string;
}