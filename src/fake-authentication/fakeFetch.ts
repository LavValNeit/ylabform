type ResponceData = {
  code: number;
  message: string;
  from: string;
};

type ResponceType<T> = {
  json: () => Promise<T>;
};

type OptionsType = {
  method: string;
  body: string;
};

export async function fakeFetch(
  url: string,
  options: OptionsType
): Promise<ResponceType<ResponceData>> {
  const newBody = JSON.parse(options.body);
  if (newBody.email === "test@test.com" && newBody.password === "test") {
    return Promise.resolve({
      json: () => Promise.resolve({ code: 200, message: "ok", from: url }),
    });
  } else
    return Promise.resolve({
      json: () =>
        Promise.resolve({ code: 400, message: "client error", from: url }),
    });
}
