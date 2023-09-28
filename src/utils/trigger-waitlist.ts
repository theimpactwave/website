export const triggerWaitlist = (redirect?: boolean): void => {
  if (typeof window !== "undefined") {
    if (redirect) {
      window.location.href = window.location.origin + "/#waitlist";
    } else {
      window.history.replaceState({}, "", "#waitlist");
      window.dispatchEvent(new HashChangeEvent("hashchange"));
    }
  }
};
