import { User } from "@josulliv101/types";

export interface LayoutProps {
  children: React.ReactNode;
  user: User;
  onLogin: () => void;
  onLogout: () => void;
  onThemeOptionChange: () => void;
}
