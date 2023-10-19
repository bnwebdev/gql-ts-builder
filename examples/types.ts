export type Address = {
  city: string;
  postcode: string;
};

export type DeliveryAddress = {
  type: "delivery";
  from: Address;
  to: Address;
};

export type DestinationAddress = {
  type: "destination";
  target: Address;
};

export type Company = {
  id: number;
  name: string;
};

export type SellerProfile = {
  id: number;
  company: Company;
  email: string;
};

export type Deal = {
  id: number;
  description: string;
  address: DeliveryAddress | DestinationAddress;
};

export type UserProfile = {
  id: number;
  firstName: string;
  lastName: string;
};

export type User = {
  id: number;
  createdAt: number;
  updatedAt: number;
  profile: UserProfile;
  sellerProfile?: SellerProfile;
  deals: Deal[];
};
