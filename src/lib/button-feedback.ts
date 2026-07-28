/** Shared click feedback: haptic + button sound */

const SOUND_SRC = "/button-click-sound.wav";

let audio: HTMLAudioElement | null = null;

function getAudio(): HTMLAudioElement | null {
  if (typeof window === "undefined") return null;
  if (!audio) {
    audio = new Audio(SOUND_SRC);
    audio.preload = "auto";
    audio.volume = 0.55;
  }
  return audio;
}

/** Light device vibration when supported (mostly Android / some PWAs). */
export function triggerHaptic(ms = 12): void {
  try {
    if (typeof navigator !== "undefined" && typeof navigator.vibrate === "function") {
      navigator.vibrate(ms);
    }
  } catch {
    /* ignore unsupported / blocked vibrate */
  }
}

/** Play the shared button click sound (restarts if already playing). */
export function playButtonSound(): void {
  try {
    const el = getAudio();
    if (!el) return;
    el.currentTime = 0;
    void el.play().catch(() => {
      /* autoplay policy / missing file — ignore */
    });
  } catch {
    /* ignore */
  }
}

export function triggerButtonFeedback(): void {
  triggerHaptic(12);
  playButtonSound();
}

export function isFeedbackButtonTarget(target: EventTarget | null): boolean {
  if (!(target instanceof Element)) return false;
  const el = target.closest("button, [role='button']");
  if (!el) return false;
  if (el instanceof HTMLButtonElement && el.disabled) return false;
  if (el.getAttribute("aria-disabled") === "true") return false;
  if (el.hasAttribute("data-no-feedback")) return false;
  return true;
}
