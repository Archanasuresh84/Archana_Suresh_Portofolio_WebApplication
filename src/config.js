/**
 * Personal links live in this file.
 *
 * RESUME_URL accepts:
 * - a Google Drive share link
 * - a GitHub "blob" link to a PDF
 * - a OneDrive or SharePoint share link
 * - a direct file URL
 *
 * Share the Google Drive file as "Anyone with the link — Viewer"
 * so visitors can open it.
 */
export const RESUME_URL =
  'https://drive.google.com/file/d/1DVrYcRcaTn7QlApjwR0mJ-k-vsbHK6IC/view?usp=sharing';

/** Profile URL. Leave empty until the GitHub profile link is available. */
export const GITHUB_URL = 'https://github.com/Archanasuresh84';

export const LINKEDIN_URL = 'https://linkedin.com/in/archanasuresh1';

export const EMAIL = 'archanasuresh@gmail.com';

export const PHONE = '8304022237';

export const LOCATION = 'Kochi, Kerala, India';

/** Project repository URLs. Leave a value empty to show "GitHub link coming soon". */
export const PROJECT_GITHUB_URLS = {
  adhdDetection: '',
  corporationManagement: '',
  boutiqueManagement: '',
};

function encodeSharingUrl(shareUrl) {
  const bytes = new TextEncoder().encode(shareUrl);
  let binary = '';
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary).replace(/=+$/g, '').replace(/\//g, '_').replace(/\+/g, '-');
}

/**
 * Turn a hosted share link into a URL that opens or downloads the file.
 * Direct file URLs are returned unchanged.
 */
export function toDirectDownloadUrl(input) {
  if (typeof input !== 'string') return '';
  const url = input.trim();
  if (!url) return '';

  let parsed;
  try {
    parsed = new URL(url);
  } catch {
    return url;
  }

  const host = parsed.hostname.toLowerCase();

  if (host === 'drive.google.com' || host === 'docs.google.com') {
    const pathMatch = parsed.pathname.match(/\/d\/([a-zA-Z0-9_-]+)/);
    const id = pathMatch?.[1] || parsed.searchParams.get('id');
    if (id) {
      return `https://drive.google.com/uc?export=download&id=${id}`;
    }
  }

  if (host === 'github.com') {
    const parts = parsed.pathname.split('/').filter(Boolean);
    const blobIndex = parts.indexOf('blob');
    if (blobIndex === 2 && parts.length > 4) {
      const user = parts[0];
      const repo = parts[1];
      const branch = parts[3];
      const filePath = parts.slice(4).join('/');
      return `https://raw.githubusercontent.com/${user}/${repo}/${branch}/${filePath}`;
    }
  }

  if (host === '1drv.ms') {
    const encoded = encodeSharingUrl(url);
    return `https://api.onedrive.com/v1.0/shares/u!${encoded}/root/content`;
  }

  if (host === 'onedrive.live.com') {
    const resid = parsed.searchParams.get('resid');
    if (resid) {
      const download = new URL('https://onedrive.live.com/download');
      download.searchParams.set('resid', resid);
      const authkey = parsed.searchParams.get('authkey');
      if (authkey) download.searchParams.set('authkey', authkey);
      return download.toString();
    }
    parsed.searchParams.set('download', '1');
    return parsed.toString();
  }

  if (host.endsWith('.sharepoint.com')) {
    parsed.searchParams.set('download', '1');
    return parsed.toString();
  }

  return url;
}

export function getResumeDownloadUrl(resumeUrl = RESUME_URL) {
  if (typeof resumeUrl !== 'string' || resumeUrl.trim() === '') return '';
  return toDirectDownloadUrl(resumeUrl);
}
