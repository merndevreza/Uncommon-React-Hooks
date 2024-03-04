import { faker } from "@faker-js/faker";

const threshold = 1000;
export const users = Array.from(Array(threshold), () => {
  return {
    name: faker.name.fullName(),
    avatar: faker.image.avatar(),
  };
});
