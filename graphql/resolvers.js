import {getRandomUser, getUsers} from "./db";

const resolvers  = {
  Query: {
    users: () => getUsers(),
    user: () => getRandomUser()
  }
};

export default resolvers;