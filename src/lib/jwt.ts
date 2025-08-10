import type { UserRoleType } from '@/types';

interface DecodedToken {
  email: string;
  exp: number;
  role: UserRoleType;
  userId: string;
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
  } catch (_e) {
    // Falha ao decodificar o token JWT
    return null;
  }
}
