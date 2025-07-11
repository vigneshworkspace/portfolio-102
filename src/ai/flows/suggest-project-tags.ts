// This file is machine-generated - edit at your own risk!

'use server';

/**
 * @fileOverview An AI agent that suggests keywords and tags for projects based on their descriptions.
 *
 * - suggestProjectTags - A function that suggests tags for a given project description.
 * - SuggestProjectTagsInput - The input type for the suggestProjectTags function.
 * - SuggestProjectTagsOutput - The return type for the suggestProjectTags function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestProjectTagsInputSchema = z.object({
  projectDescription: z.string().describe('The description of the project.'),
});
export type SuggestProjectTagsInput = z.infer<typeof SuggestProjectTagsInputSchema>;

const SuggestProjectTagsOutputSchema = z.object({
  tags: z.array(z.string()).describe('An array of suggested keywords/tags for the project.'),
});
export type SuggestProjectTagsOutput = z.infer<typeof SuggestProjectTagsOutputSchema>;

export async function suggestProjectTags(input: SuggestProjectTagsInput): Promise<SuggestProjectTagsOutput> {
  return suggestProjectTagsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestProjectTagsPrompt',
  input: {schema: SuggestProjectTagsInputSchema},
  output: {schema: SuggestProjectTagsOutputSchema},
  prompt: `You are an expert at suggesting relevant keywords and tags for software development projects.

  Given the following project description, suggest 5-10 keywords or tags that would be helpful for categorizing and searching for this project.  The tags should be comma separated.

  Project Description: {{{projectDescription}}}
  `,
});

const suggestProjectTagsFlow = ai.defineFlow(
  {
    name: 'suggestProjectTagsFlow',
    inputSchema: SuggestProjectTagsInputSchema,
    outputSchema: SuggestProjectTagsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
