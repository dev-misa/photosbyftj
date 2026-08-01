const CONSENT_KEY = 'cookie-consent';

export function getConsent() {
  try {
    return localStorage.getItem(CONSENT_KEY);
  } catch {
    return null;
  }
}

export function setConsent(value) {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {
    // Storage unavailable (private browsing, disabled storage) - the
    // banner will just reappear next visit, which is an acceptable
    // fallback rather than throwing.
  }
}
