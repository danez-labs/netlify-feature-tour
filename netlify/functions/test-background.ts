import { HandlerEvent } from "@netlify/functions";

const handler = async (event: HandlerEvent) => {
  if (!event.body) {
    return;
  }

  console.log(`PDF report sent`);
};

export { handler };
