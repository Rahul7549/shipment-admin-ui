import { Injectable } from '@angular/core';
import { User } from '../../admin/model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private localStorageKey = 'users';

  constructor() { }

  isAuthenticated():boolean{
    return this.verifyJWT();
  }

  registerUser(newUser: User): Observable<string> {
    const { email, password } = newUser;
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    const existingUser = users.find((user: any) => user.email === email);
    if (existingUser) {
      return new Observable<string>(observable=>
        observable.next('User already exists!'));
    }
    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));
    return new Observable<string>(observable=>
      observable.next('Registration successful!'));
    ;
  }

  async loginUser(newUser: User): Promise<string | null> {
    const { email, password } = newUser;
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((user: any) => user.email === email && user.password === password);
    console.log(user);
    if (!user) {
      return 'User not found';
    }
    const token = await this.generateJWT();
    this.storeTokenInSession(token);
    return token;
  }

  async generateJWT(): Promise<string> {
    const header = { alg: 'HS256', typ: 'JWT' };
    const payload = {
      sub: 'userId',
      name: 'User',
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + (60 * 60),
    };

    const base64Header = btoa(JSON.stringify(header));
    const base64Payload = btoa(JSON.stringify(payload));

    const token = `${base64Header}.${base64Payload}`;
    const signature = await this.signToken(token);

    return `${token}.${signature}`;
  }

  async signToken(token: string): Promise<string> {
    const secretKey = 'your-secret-key';
    const enc = new TextEncoder();
    const keyData = enc.encode(secretKey);
    const tokenData = enc.encode(token);

    const key = await window.crypto.subtle.importKey(
      'raw', keyData, { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']
    );

    const signatureBuffer = await window.crypto.subtle.sign('HMAC', key, tokenData);
    const signatureArray = Array.from(new Uint8Array(signatureBuffer));
    const signatureBase64 = btoa(String.fromCharCode(...signatureArray));

    return signatureBase64;
  }

  storeTokenInSession(token: string): void {
    const parts = token.split('.');
    const payload = JSON.parse(atob(parts[1]));
    const expiresAt = payload.exp * 1000;

    sessionStorage.setItem('jwtToken', token);
    sessionStorage.setItem('tokenExpiry', expiresAt.toString());

    const timeUntilExpiry = expiresAt - Date.now();
    setTimeout(() => {
      this.removeToken();
    }, timeUntilExpiry);
  }

  verifyJWT(): boolean {
    const token = sessionStorage.getItem('jwtToken');
    const expiresAt = sessionStorage.getItem('tokenExpiry');

    if (!token || !expiresAt) {
      return false;
    }

    const currentTime = Date.now();
    if (currentTime >= +expiresAt) {
      this.removeToken();
      return false;
    }
    return true;
  }

  removeToken(): void {
    sessionStorage.removeItem('jwtToken');
    sessionStorage.removeItem('tokenExpiry');
    console.log('Token removed due to expiration.');
  }
}
