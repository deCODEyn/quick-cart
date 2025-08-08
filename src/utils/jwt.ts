interface DecodedToken {
  userId: string;
  email: string;
  role: 'Admin' | 'User';
  exp: number;
}

function base64UrlDecode(str: string): string {
  const base64 = str.replace(/-/g, '+').replace(/_/g, '/');
  return atob(base64);
}

export function decodeJwt(token: string): DecodedToken | null {
  try {
    const payload = token.split('.')[1];
    const decodedPayload = base64UrlDecode(payload);
    return JSON.parse(decodedPayload) as DecodedToken;
  } catch (e) {
    // biome-ignore lint/suspicious/noConsole: <developer>
    console.error('Falha ao decodificar o token JWT:', e);
    return null;
  }
}