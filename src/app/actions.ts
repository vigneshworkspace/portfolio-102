'use server';

import { suggestProjectTags } from '@/ai/flows/suggest-project-tags';

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
