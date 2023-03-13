import { AddressType } from './AddressType';
import { CompanyType } from './CompanyType';

export type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressType;
  phone: string;
  website: string;
  company: CompanyType;
};
