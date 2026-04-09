export function buildCalendlyUrl(baseUrl) {
  if (!baseUrl) {
    console.error('Calendly URL is not configured. Please set VITE_CALENDLY_URL in your .env file.');
    return '';
  }
  try {
    const url = new URL(baseUrl);
    url.searchParams.set('background_color', '131313');
    url.searchParams.set('text_color', 'FDFEFE');
    url.searchParams.set('primary_color', '9DB4C0');
    url.searchParams.set('hide_gdpr_banner', '1');
    return url.toString();
  } catch {
    return baseUrl;
  }
}
