const MOBILE_UA = /(android|iphone|ipad|ipod)/i;

export function openLinkedInProfile(profileUrl: string) {
  const isMobile = MOBILE_UA.test(navigator.userAgent);

  if (!isMobile) {
    window.open(profileUrl, '_blank', 'noopener,noreferrer');
    return;
  }

  const username = profileUrl.split('/').filter(Boolean).pop() ?? '';
  const appUrl = `linkedin://in/${username}`;
  let launched = false;

  const finish = (openedApp: boolean) => {
    if (launched) return;
    launched = true;
    window.clearTimeout(timer);
    document.removeEventListener('visibilitychange', onVisibility);
    window.removeEventListener('blur', onBlur);
    if (!openedApp) {
      window.open(profileUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const onVisibility = () => {
    if (document.visibilityState === 'hidden') finish(true);
  };
  const onBlur = () => finish(true);

  const timer = window.setTimeout(() => finish(false), 1500);

  document.addEventListener('visibilitychange', onVisibility);
  window.addEventListener('blur', onBlur);
  window.location.assign(appUrl);
}