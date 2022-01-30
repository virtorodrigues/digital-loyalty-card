import { Client } from 'faunadb';

if (!process.env.FAUNADB_SCRET_KEY) {
  throw new Error("`FAUNADB_KEY` must be provided in the `.env` file");
}

export const faunadbClient = new Client({ secret: process.env.FAUNADB_SCRET_KEY });

export const getFaunadbClient = () => {
  return faunadbClient;
}