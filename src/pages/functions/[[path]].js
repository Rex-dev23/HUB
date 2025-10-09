export async function onRequest({ next, request }) {
  const res = await next();
  if (res.status === 404 && request.method === 'GET') {
    const url = new URL(request.url);
    return fetch(new URL('/index.html', url.origin));
  }
  return res;
}
