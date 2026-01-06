

// import { OpenRouter } from "@openrouter/sdk";

// const openrouter = new OpenRouter({
//   apiKey: "<OPENROUTER_API_KEY>"
// });

// const stream = await openrouter.chat.send({
//   model: "openai/gpt-3.5-turbo",
//   messages: [
//     {
//       "role": "user",
//       "content": "What is the meaning of life?"
//     }
//   ],
//   stream: true
// });




import { OpenRouter } from '@openrouter/sdk';
import {OPENAI_KEY} from './constants';


const openrouter = new OpenRouter({
  apiKey: OPENAI_KEY,
  dangerouslyAllowBrowser: true,
 
});

export default openrouter;