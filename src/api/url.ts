import { backendUrl } from '~/config'

export async function postUrl(url: string) {
  const body = {
    url,
  }
  return fetch(`${backendUrl}/api/url`, {
    method: 'post',
    body: JSON.stringify(body),
    headers: {
      'content-type': 'application/json; charset=utf-8',
    },
  })
}
