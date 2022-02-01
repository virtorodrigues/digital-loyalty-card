import { UserProps } from "./types";
import { fauna } from "../services/faunadb";
import { query as q } from "faunadb";

export async function handleErrorApiCreateUser(user: UserProps) {
  const userErrors = [];

  if (user.fullName) {
    if (user.fullName.length < 4) {
      userErrors.push({ code: 1, message: 'more than 4 letters required.' });
    }
  } else {
    userErrors.push({ code: 2, message: 'user full name is required.' });
  }

  if (user.email) {
    const [firstPart, secondPart] = user.email.split("@");

    if (firstPart.length < 2 || !secondPart) {
      userErrors.push({ code: 3, message: 'invalid email format.' });
    }
  } else {
    userErrors.push({ code: 4, message: 'user email is required.' });
  }

  if (user.sex) {
    if (!['males', 'females'].includes(user.sex)) {
      userErrors.push({ code: 5, message: 'invalid sex format.' });
    }
  } else {
    userErrors.push({ code: 6, message: 'user sex is required.' });
  }

  if (user.cpf) {
    if (user.cpf.length !== 14) {
      userErrors.push({ code: 7, message: 'invalid cpf format.' });
    }
  } else {
    userErrors.push({ code: 8, message: 'user cpf is required.' });
  }

  if (user.cel) {
    if (user.cel.length !== 14 && user.cel.length !== 13) {
      userErrors.push({ code: 9, message: 'invalid cel format.' });
    }
  } else {
    userErrors.push({ code: 10, message: 'user cel is required.' });
  }

  if (user.address) {
    if (!user.address.street) {
      userErrors.push({ code: 11, message: 'user street is required.' });
    }
    if (!user.address.number) {
      userErrors.push({ code: 12, message: 'user number is required.' });
    }
    if (!user.address.neighborhood) {
      userErrors.push({ code: 13, message: 'user neighborhood is required.' });
    }
    if (!user.address.city) {
      userErrors.push({ code: 14, message: 'user city is required.' });
    }
    if (!user.address.state) {
      userErrors.push({ code: 15, message: 'user state is required.' });
    }
    if (!user.address.cep) {
      userErrors.push({ code: 16, message: 'user cep is required.' });
    }
  } else {
    userErrors.push({ code: 17, message: 'user address is required.' });
  }




  return userErrors;
}