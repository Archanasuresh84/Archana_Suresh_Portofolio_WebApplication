import { getResumeDownloadUrl, toDirectDownloadUrl } from '../src/config.js';

const drive = getResumeDownloadUrl();
const expectedDrive =
  'https://drive.google.com/uc?export=download&id=1DVrYcRcaTn7QlApjwR0mJ-k-vsbHK6IC';
const github = toDirectDownloadUrl(
  'https://github.com/octocat/resume/blob/main/docs/Archana.pdf',
);
const expectedGithub =
  'https://raw.githubusercontent.com/octocat/resume/main/docs/Archana.pdf';
const oneDrive = toDirectDownloadUrl('https://1drv.ms/b/s!example');
const sharePoint = toDirectDownloadUrl(
  'https://contoso.sharepoint.com/:b:/g/personal/user/file',
);
const direct = toDirectDownloadUrl('https://example.com/files/resume.pdf');

const checks = [
  [drive === expectedDrive, 'google drive', drive],
  [github === expectedGithub, 'github blob', github],
  [oneDrive.startsWith('https://api.onedrive.com/v1.0/shares/u!') && oneDrive.endsWith('/root/content'), 'onedrive', oneDrive],
  [sharePoint.includes('download=1'), 'sharepoint', sharePoint],
  [direct === 'https://example.com/files/resume.pdf', 'direct', direct],
  [getResumeDownloadUrl('') === '', 'empty', ''],
  [getResumeDownloadUrl('   ') === '', 'blank', ''],
];

let failed = false;
for (const [ok, name, value] of checks) {
  if (!ok) {
    failed = true;
    console.error('FAIL', name, value);
  } else {
    console.log('OK', name);
  }
}

if (failed) process.exit(1);
