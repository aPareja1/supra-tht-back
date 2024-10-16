/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AuthService } from './auth.service';
import { InternalAxiosRequestConfig } from 'axios';

@Injectable()
export class AuthInterceptor {
  constructor(
    private httpService: HttpService,
    private readonly authService: AuthService,
  ) {
    this.addBearerTokenInterceptor();
  }

  private addBearerTokenInterceptor() {
    this.httpService.axiosRef.interceptors.request.use(
      async (config: InternalAxiosRequestConfig) => {
        if (this.shouldSkipRequest(config)) {
          return config;
        }

        const token = await this.authService.fetchBearerToken();
        if (token) {
          config.headers['X-API-TYPE'] = 'public';
          config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );
  }

  private shouldSkipRequest(config: InternalAxiosRequestConfig): boolean {
    const skipUrls = ['/auth', '/auth/token'];
    return skipUrls.some((url) => config.url?.includes(url));
  }
}
