'use server';

/**
 * @fileOverview A flow to predict the waiting time for an order based on the number of pending orders.
 *
 * - predictWaitingTime - A function that predicts the waiting time for an order.
 * - PredictWaitingTimeInput - The input type for the predictWaitingTime function.
 * - PredictWaitingTimeOutput - The return type for the predictWaitingTime function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PredictWaitingTimeInputSchema = z.object({
  pendingOrders: z
    .number()
    .describe('The number of pending orders in the cafe.'),
});
export type PredictWaitingTimeInput = z.infer<typeof PredictWaitingTimeInputSchema>;

const PredictWaitingTimeOutputSchema = z.object({
  estimatedTime: z
    .string()
    .describe("The estimated waiting time in minutes. E.g., '10-15 minutes'."),
});
export type PredictWaitingTimeOutput = z.infer<typeof PredictWaitingTimeOutputSchema>;

export async function predictWaitingTime(input: PredictWaitingTimeInput): Promise<PredictWaitingTimeOutput> {
  return predictWaitingTimeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'predictWaitingTimePrompt',
  input: {schema: PredictWaitingTimeInputSchema},
  output: {schema: PredictWaitingTimeOutputSchema},
  prompt: `You are an AI assistant specialized in predicting waiting times for a campus cafe.
  Given the number of pending orders, provide an estimated waiting time in minutes.
  The estimated time should be a range (e.g., "5-10 minutes").

  Number of pending orders: {{{pendingOrders}}}
  `, 
});

const predictWaitingTimeFlow = ai.defineFlow(
  {
    name: 'predictWaitingTimeFlow',
    inputSchema: PredictWaitingTimeInputSchema,
    outputSchema: PredictWaitingTimeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
