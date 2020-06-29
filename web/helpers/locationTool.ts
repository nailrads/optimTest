export const getQuery = (query:string) => new URLSearchParams(window.location.search).get(query);

export const getDomain = (host: string): string => host.replace(/^https?:\/\/(www\.)?([^\/]+).+$/, '$2');

export const refName = (ref: string) => getDomain(ref).replace(/\.[a-z]+$/, '').substring(0, 40);

export const getRef = (): string => !!document.referrer ? refName(document.referrer) : 'direct';
