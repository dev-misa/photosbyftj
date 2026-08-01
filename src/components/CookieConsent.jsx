import { useEffect, useState } from 'react';
import { getConsent, setConsent } from '../utils/cookieConsent';

function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!getConsent()) setVisible(true);
  }, []);

  const choose = (value) => {
    setConsent(value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="CookieConsent" role="dialog" aria-label="Cookie consent">
      <p>
        This site stores your light/dark theme choice in your browser so it's
        remembered next time. No tracking or advertising cookies are used.
      </p>
      <div className="CookieConsent-actions">
        <button className="CookieConsent-decline" onClick={() => choose('declined')}>
          Decline
        </button>
        <button className="CookieConsent-accept" onClick={() => choose('accepted')}>
          Accept
        </button>
      </div>
    </div>
  );
}

export default CookieConsent;
