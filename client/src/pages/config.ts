console.log("Google Form ID:", import.meta.env.VITE_GOOGLE_FORM_ID);
export const GOOGLE_FORM_CONFIG = {
    formId: import.meta.env.VITE_GOOGLE_FORM_ID || '',
    formFields: {
      firstName: import.meta.env.VITE_GOOGLE_FORM_FIRST_NAME_FIELD || '',
      lastName: import.meta.env.VITE_GOOGLE_FORM_LAST_NAME_FIELD || '',
      email: import.meta.env.VITE_GOOGLE_FORM_EMAIL_FIELD || '',
      motorcycleBrand: import.meta.env.VITE_GOOGLE_FORM_BRAND_FIELD || '',
      motorcycleModel: import.meta.env.VITE_GOOGLE_FORM_MODEL_FIELD || '',
      consent: import.meta.env.VITE_GOOGLE_FORM_CONSENT_FIELD || '',
    }
  }; 