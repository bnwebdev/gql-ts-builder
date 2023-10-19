import { Payload, QUERY } from "./query";

export const useUserSellerProfile = (): Payload => {
  console.log(QUERY);

  return {
    id: 0,
    profile: {
      firstName: "Hello",
      lastName: "World",
    },
    sellerProfile: {
      company: {
        name: "Name",
        id: 0,
      },
    },
  };
};
