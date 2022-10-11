const packageJson = require('../../package.json');

module.exports = () => {
  const now = new Date();
  const { timeZone } = Intl.DateTimeFormat().resolvedOptions();
  const buildDate = Intl.DateTimeFormat('fr-CA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(now);
  const buildTime = Intl.DateTimeFormat('nl-NL', { hour: '2-digit', minute: '2-digit' }).format(
    now,
  );
  const dateOnly = Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
  }).format(now);
  return {
    version: packageJson.version,
    time: {
      raw: now.toISOString(),
      formatted: `${buildDate} ${buildTime} ${timeZone}`,
      dateOnly: `${dateOnly}`
    },
  };
};