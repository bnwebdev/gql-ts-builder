import { Payload, QUERY } from "./query";

export const useUserProfile = (): Payload => {
  console.log(QUERY);

  return {
    id: 0,
    deals: [
      {
        description: "",
        address: {
          type: "delivery",
          to: {
            city: "",
            postcode: "",
          },
          from: {
            city: "",
            postcode: "",
          },
        },
      },
      {
        description: "",
        address: {
          type: "destination",
          target: {
            city: "",
            postcode: "",
          },
        },
      },
    ],
  };
};
