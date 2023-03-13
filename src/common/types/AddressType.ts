import { GeoType } from './GeoType';

export type AddressType = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoType;
};
