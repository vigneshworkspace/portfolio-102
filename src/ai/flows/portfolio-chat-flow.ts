'use server';

/**
 * @fileOverview A portfolio chatbot that can answer questions about Vigneshwaran.
 *
 * - portfolioChatFlow - A function that handles the chat conversation.
 * - PortfolioChatInput - The input type for the portfolioChatFlow function.
 * - PortfolioChatOutput - The return type for the portfolioChatFlow function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { SKILLS, EXPERIENCE, PROJECTS, CERTIFICATIONS, GITHUB_URL, LINKEDIN_URL, RESUME_URL } from '@/lib/data';
import { BADGES } from '@/lib/badges';
import { Message } from '@genkit-ai/googleai';


const portfolioData = `
# VIGNESHWARAN'S PORTFOLIO DATA

## ABOUT & SKILLS
- **Philosophy**: Technology is a bridge between data and human experience. Passionate about full-stack engineering and AI to solve real-world problems. Believes in holistic, elegant, and efficient code.
- **Skills**:
  - Frontend & Backend: ${SKILLS[0].technologies}
  - AI & Machine Learning: ${SKILLS[1].technologies}
  - Tools & DevOps: ${SKILLS[2].technologies}
- **Competencies/Badges**: ${BADGES.join(', ')}

## EXPERIENCE
${EXPERIENCE.map(exp => `- **${exp.title} at ${exp.company} (${exp.date})**: ${exp.description}`).join('\n')}

## PROJECTS
${PROJECTS.map(p => `- **${p.title} (${p.category})**: ${p.description} (Tech: ${p.tags.join(', ')})`).join('\n')}

## CERTIFICATIONS
${CERTIFICATIONS.map(c => `- **${c.title}** from ${c.issuer} (${c.date})`).join('\n')}

## CONTACT & LINKS
- **Email**: vigneshwaran.dev@example.com
- **GitHub**: ${GITHUB_URL}
- **LinkedIn**: ${LINKEDIN_URL}
- **Resume**: ${RESUME_URL}
`;

const PortfolioChatInputSchema = z.object({
  message: z.string().describe('The user\'s message.'),
  history: z.array(z.custom<Message>()).describe('The conversation history.'),
});
export type PortfolioChatInput = z.infer<typeof PortfolioChatInputSchema>;

const PortfolioChatOutputSchema = z.object({
  response: z.string().describe('The chatbot\'s response.'),
});
export type PortfolioChatOutput = z.infer<typeof PortfolioChatOutputSchema>;


export async function portfolioChat(input: PortfolioChatInput): Promise<PortfolioChatOutput> {
    const response = await portfolioChatFlow(input);
    return { response };
}

const portfolioChatFlow = ai.defineFlow(
  {
    name: 'portfolioChatFlow',
    inputSchema: PortfolioChatInputSchema,
    outputSchema: z.string(),
  },
  async ({ message, history }) => {
    const llm = ai.model('googleai/gemini-2.0-flash');

    const systemInstruction = `You are V-AI, a helpful and friendly AI assistant for Vigneshwaran's personal portfolio website. Your goal is to answer questions about Vigneshwaran based on the provided data. Be conversational, concise, and professional. If you don't know the answer, say that you don't have that information.

Here is the data about Vigneshwaran:
${portfolioData}
`;

    const { text } = await ai.generate({
      model: llm,
      prompt: message,
      history: [
        { role: 'system', parts: [{ text: systemInstruction }] },
        ...history,
      ],
      config: {
        temperature: 0.5,
      },
    });

    return text;
  }
);
