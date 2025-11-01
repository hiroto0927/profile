import axios, { AxiosResponse } from "axios";

interface Joke {
  id: number;
  type: string;
  setup: string;
  punchline: string;
}

export default async function TestComponents() {
  const resp = await axios
    .get("https://official-joke-api.appspot.com/jokes/random")
    .then((response: AxiosResponse<Joke>) => response.data);

  return (
    <div>
      <h1>Random Joke</h1>
      <p>{resp.setup}</p>
      <p>
        <strong>{resp.punchline}</strong>
      </p>
    </div>
  );
}
