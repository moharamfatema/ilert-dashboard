export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  timezone:
    | "Europe/Berlin"
    | "America/New_York"
    | "America/Los_Angeles"
    | "Asia/Istanbul";
  position: string;
  department: string;
  avatarUrl: string;
  language: "de" | "en";
  region: "DE" | "GB" | "CH" | "CN" | "IN" | "US" | "FR" | "ES" | "CA" | "IE";
  role: "STAKEHOLDER" | "GUEST" | "RESPONDER" | "USER" | "ADMIN";
  shiftColor: string;
  mutedUntil: string;
  createdAt: string;
  updatedAt: string;
};

export type Team = {
  id: number;
  name: string;
  visibility: "PUBLIC" | "PRIVATE";
  members: {
    user: User;
    role: "STAKEHOLDER" | "GUEST" | "RESPONDER" | "USER" | "ADMIN";
  }[];
  createdAt: string;
  updatedAt: string;
};

export type Block = {
  id: string;
  title: string;
  options?: Record<string, any>;
};

