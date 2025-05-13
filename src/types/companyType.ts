import { Address } from "./addressType";
import { SocialLinks } from "./socialType";

export type CompanyType = {
  id?: string;
  fullName: string;
  email: string;
  phone: string;
  username: string;
  companyId: string;
  plan: string;
  maxEmployees: string;
  accountType: string;
  role: string;
  status: string;
  isVerified: boolean;
  socialLinks: SocialLinks;
  address: Address;
  companyLogo: string | null;
  description: string;
  website: string;
  industry?: string;
};
