/**
 * Spam filter for the contact form.
 * Uses a scoring system — submissions above the threshold are flagged as spam.
 * Tuned to catch SEO/web-design solicitation bots.
 */

// Spam phrases commonly found in bot submissions (case-insensitive matching)
const SPAM_PHRASES = [
  'seo',
  'search engine optimization',
  'search visibility',
  'improve search',
  'website redesign',
  'website design',
  'web design',
  'web development',
  'backlink',
  'link building',
  'page rank',
  'pagerank',
  'domain authority',
  'keyword ranking',
  'google ranking',
  'organic traffic',
  'voice search',
  'quick samples',
  'quick samples & pricing',
  'digital marketing',
  'social media marketing',
  'ppc campaign',
  'google ads',
  'lead generation',
  'content marketing',
  'off-page',
  'on-page',
  'website audit',
  'site audit',
  'free audit',
  'free analysis',
  'free consultation',
  'free quote',
  'affordable price',
  'competitive price',
  'special offer',
  'limited time offer',
  'guaranteed results',
  'first page of google',
  'rank higher',
  'rank #1',
  'increase traffic',
  'boost traffic',
  'website ready for search',
  'improvement proposal',
];

// Known spam subject patterns (exact or near-exact matches)
const SPAM_SUBJECTS = [
  'website help',
  'website help?',
  'seo improvement proposal',
  'website seo improvement proposal',
  'seo support discussion',
  'improve search visibility with seo',
  'is your business ready for voice search',
  'is your website ready for search',
  'digital marketing proposal',
  'seo proposal',
  'website proposal',
  'marketing proposal',
];

// URL pattern to detect links in messages
const URL_REGEX = /https?:\/\/[^\s]+|www\.[^\s]+|\.[a-z]{2,}\/[^\s]+/gi;

// Threshold above which a submission is considered spam
const SPAM_THRESHOLD = 3;

interface SpamCheckResult {
  isSpam: boolean;
  score: number;
  reasons: string[];
}

export function checkForSpam(
  name: string,
  email: string,
  subject: string,
  message: string
): SpamCheckResult {
  let score = 0;
  const reasons: string[] = [];

  const combinedText = `${name} ${subject} ${message}`.toLowerCase();
  const subjectLower = subject.toLowerCase().trim();

  // Check for spam phrases in the combined text
  let phraseMatches = 0;
  for (const phrase of SPAM_PHRASES) {
    if (combinedText.includes(phrase)) {
      phraseMatches++;
    }
  }
  if (phraseMatches > 0) {
    // Each phrase match adds 1.5 points, but cap at 6
    const phraseScore = Math.min(phraseMatches * 1.5, 6);
    score += phraseScore;
    reasons.push(`Matched ${phraseMatches} spam phrase(s)`);
  }

  // Check for known spam subject lines
  for (const spamSubject of SPAM_SUBJECTS) {
    if (subjectLower === spamSubject || subjectLower.includes(spamSubject)) {
      score += 4;
      reasons.push(`Known spam subject: "${subject}"`);
      break;
    }
  }

  // Check for URLs in the message (legitimate enquiries rarely contain links)
  const urlMatches = message.match(URL_REGEX);
  if (urlMatches && urlMatches.length > 0) {
    score += urlMatches.length >= 2 ? 3 : 1.5;
    reasons.push(`Contains ${urlMatches.length} URL(s)`);
  }

  // Check for very short messages that are just pitches
  if (message.length < 100 && phraseMatches > 0) {
    score += 1;
    reasons.push('Short message with spam phrases');
  }

  // Check for common spam email patterns (random chars before @gmail etc.)
  const emailLocal = email.split('@')[0];
  if (/^[a-z]{2,4}\d{4,}$/i.test(emailLocal)) {
    score += 1;
    reasons.push('Suspicious email pattern');
  }

  return {
    isSpam: score >= SPAM_THRESHOLD,
    score,
    reasons,
  };
}
