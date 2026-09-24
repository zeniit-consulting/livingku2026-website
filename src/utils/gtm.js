/**
 * Google Tag Manager & DataLayer Helper for Livingku.ID
 * Supports GA4 Virtual Pageviews (SPA) & Conversion Events (WhatsApp CTA, BOQ Calc, etc.)
 */

// Reads GTM Container ID from environment variable or window config, fallback to placeholder
export const GTM_ID = import.meta.env.VITE_GTM_ID || 'GTM-XXXXXXX';

/**
 * Push structured event data into window.dataLayer safely
 * @param {string} eventName - GA4 event name (e.g., 'page_view', 'generate_lead')
 * @param {Object} [eventParams] - Additional event parameters
 */
export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      ...eventParams,
      timestamp: new Date().toISOString()
    });
  }
};

/**
 * Track SPA Pageviews on route changes
 * @param {string} path - URL path
 * @param {string} title - Page title
 */
export const trackPageView = (path, title) => {
  trackEvent('virtual_page_view', {
    page_location: window.location.href,
    page_path: path,
    page_title: title || document.title,
  });
};

/**
 * Track WhatsApp Conversion / Lead
 * @param {string} source - CTA location ('hero', 'floating_button', 'services_card', 'header', 'footer')
 * @param {string} [serviceName] - Service related to the inquiry
 */
export const trackWhatsAppLead = (source, serviceName = '') => {
  trackEvent('generate_lead', {
    lead_type: 'whatsapp_consultation',
    lead_source: source,
    service_name: serviceName,
  });
};

/**
 * Track Cost Estimator / RAB Calculation
 * @param {string} buildingType
 * @param {number} estimatedTotal
 */
export const trackRABCalculation = (buildingType, estimatedTotal) => {
  trackEvent('calculate_rab', {
    building_type: buildingType,
    estimated_amount: estimatedTotal,
  });
};
