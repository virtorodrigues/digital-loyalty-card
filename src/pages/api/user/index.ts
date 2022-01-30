import { NextApiRequest, NextApiResponse } from "next";
import { faunadbClient, getFaunadbClient } from "../../../services/faunadb";
import { query as q } from "faunadb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  switch (req.method) {
    case "GET": {
      const items = await faunadbClient.query(
        q.Create(
          q.Collection('test'),
          { data: { testField: 'testValue' } }
        )
      )

      return res.json({
        items,
        status: "success",
      });
    }

    case "POST": {
      const { name, email, password, confirmationPassword } = req.body;

      const doc = await faunadbClient.query(
        q.Create(
          q.Collection('users'),
          {
            data: {
              name,
              email,
              password,
              confirmationPassword
            }
          }
        )
      )

      return res.json({
        status: "success",
      });
    }

    default: {
      return res.status(405).json({
        status: "error",
        error: "Method not allowed",
      });
    }
  }
}