export const logToTerminal = (message: string) => {
  window.dispatchEvent(
    new CustomEvent<string>("terminal-log", { detail: message })
  );
};
