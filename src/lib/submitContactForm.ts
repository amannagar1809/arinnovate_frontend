export type ContactFormPayload = {
  name: string;
  email: string;
  message: string;
  phone?: string;
  company?: string;
  subject?: string;
};

export async function submitContactForm(
  data: ContactFormPayload
): Promise<{ success: boolean; error?: string }> {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    return { success: false, error: result.error || 'Failed to send message.' };
  }

  return { success: true };
}
