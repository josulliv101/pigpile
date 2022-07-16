import { User } from "@pigpile/types";

export interface LayoutProps {
  children: React.ReactNode;
  user: User;
  onLogin: () => void;
  onLogout: () => void;
  onThemeOptionChange: () => void;
}
