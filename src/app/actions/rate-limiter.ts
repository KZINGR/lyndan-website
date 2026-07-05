/**
 * Simple in-memory rate limiter for contact form submissions.
 * Limits submissions per IP address using a sliding window.
 * 
 * Note: This works well with the standalone Docker deployment (single process).
 * For multi-instance deployments, consider using Redis instead.
 */

const MAX_SUBMISSIONS = 3;
const WINDOW_MS = 60 * 60 * 1000; // 1 hour
const CLEANUP_INTERVAL_MS = 10 * 60 * 1000; // Clean up stale entries every 10 minutes

// Store submission timestamps per IP
const submissions = new Map<string, number[]>();
let lastCleanup = Date.now();

/**
 * Remove expired entries from the map to prevent memory leaks.
 */
function cleanup() {
  const now = Date.now();
  if (now - lastCleanup < CLEANUP_INTERVAL_MS) return;

  lastCleanup = now;
  const cutoff = now - WINDOW_MS;

  for (const [ip, timestamps] of submissions.entries()) {
    const valid = timestamps.filter((t) => t > cutoff);
    if (valid.length === 0) {
      submissions.delete(ip);
    } else {
      submissions.set(ip, valid);
    }
  }
}

interface RateLimitResult {
  allowed: boolean;
  remainingAttempts: number;
  retryAfterSeconds?: number;
}

/**
 * Check if a submission from the given IP is allowed.
 * Returns whether the request is allowed and how many attempts remain.
 */
export function checkRateLimit(ip: string): RateLimitResult {
  cleanup();

  const now = Date.now();
  const cutoff = now - WINDOW_MS;
  const existing = submissions.get(ip) || [];

  // Filter to only timestamps within the current window
  const recentSubmissions = existing.filter((t) => t > cutoff);

  if (recentSubmissions.length >= MAX_SUBMISSIONS) {
    // Find the oldest submission in the window to calculate retry time
    const oldestInWindow = Math.min(...recentSubmissions);
    const retryAfterMs = oldestInWindow + WINDOW_MS - now;
    const retryAfterSeconds = Math.ceil(retryAfterMs / 1000);

    return {
      allowed: false,
      remainingAttempts: 0,
      retryAfterSeconds,
    };
  }

  // Record this submission
  recentSubmissions.push(now);
  submissions.set(ip, recentSubmissions);

  return {
    allowed: true,
    remainingAttempts: MAX_SUBMISSIONS - recentSubmissions.length,
  };
}
