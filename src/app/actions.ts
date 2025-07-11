'use server';

import { suggestProjectTags } from '@/ai/flows/suggest-project-tags';
import { portfolioChat } from '@/ai/flows/portfolio-chat-flow';
import type { Message } from '@genkit-ai/googleai';

export async function handleSuggestTags(projectDescription: string) {
  try {
    const result = await suggestProjectTags({ projectDescription });
    return { tags: result.tags, error: null };
  } catch (e) {
    console.error(e);
    // Provide a user-friendly error message
    const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
    return { tags: [], error: `Failed to suggest tags. ${errorMessage}` };
  }
}

export async function handleChat(message: string, history: Message[]) {
    try {
        const result = await portfolioChat({ message, history });
        return { response: result.response, error: null };
    } catch (e) {
        console.error(e);
        const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
        return { response: null, error: `AI chat failed. ${errorMessage}` };
    }
}
