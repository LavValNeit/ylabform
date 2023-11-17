import toast from "react-hot-toast";
import { fakeFetch } from "./fakeFetch";

export async function authenticate(inputEmail: string, inputPassword: string) {
  const email = inputEmail.trim();
  const password = inputPassword.trim();
  const response = await fakeFetch("https://example.com/api/login", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const data = await response.json();

  if (data.code === 200) {
    toast.success("You successfully logged in");
  } else if (data.code === 400) {
    toast.error(
      "You passed wrong credentials use 'test@test.com' and password 'test'"
    );
  }
}
