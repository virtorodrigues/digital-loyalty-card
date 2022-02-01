import { NextApiRequest, NextApiResponse } from "next";

import { query as q } from "faunadb";
import { fauna } from "../../../services/faunadb";

import { handleErrorApiCreateUser } from "../../../core/handleErrorApi";
import { UserProps } from "../../../core/types";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  switch (req.method) {
    case "GET": {
      //const items = await fauna.query(
      //   q.Create(
      //     q.Collection('test'),
      //     { data: { testField: 'testValue' } }
      //    )
      // )

      return res.json({
        //items,
        status: "success",
      });
    }

    case "POST": {
      //const { name, email, password, confirmationPassword } = req.body;

      const user = {
        fullName: "easdasds",
        email: "asdasd@sdfsdfsdfzdsdsdssl.com",
        sex: "males", //males|females
        cpf: "443.759.438-07",
        cel: "(18)99718-3307",
        address: {
          street: "Rua Carolina dassan Carlos",
          number: "161",
          neighborhood: "mario amato",
          city: "Presidente Prudente",
          state: "São Paulo",
          cep: "19064150",
        },
      } as UserProps;

      const userErrors = await handleErrorApiCreateUser(user);

      console.log(userErrors);

      if (userErrors.length === 0) {
        await fauna.query(
          q.Create(
            q.Collection('users'),
            {
              data: user
            }
          )
        );

        return res.json({
          success: true,
          user,
        });
      }

      return res.send({ sucess: false, error: userErrors });
    }

    default: {
      return res.status(405).json({
        status: "error",
        error: "Method not allowed",
      });
    }
  }
}