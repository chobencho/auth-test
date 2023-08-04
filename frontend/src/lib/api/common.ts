import client from "lib/api/client";

export const checkAge = (id: string | undefined) => {
  return client.get(`/checkAge/${id}`);
};
