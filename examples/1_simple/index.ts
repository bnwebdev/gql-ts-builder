import { Payload, QUERY } from "./query";

export const useUserProfile = (): Payload => {
  console.log(QUERY);

  return {
    id: 0,
    profile: {
      firstName: "Hello",
      lastName: "World",
    },
  };
};
