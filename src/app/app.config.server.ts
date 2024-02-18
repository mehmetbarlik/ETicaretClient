import { mergeApplicationConfig, ApplicationConfig, Injectable } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { HttpClient } from '@angular/common/http';
import { ProductsModule } from './ui/components/products/products.module';
const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    {provide: "baseUrl", useValue: "https://localhost:44362/api", multi: true},
  ]
};

@Injectable({providedIn: 'platform'})
export class ConfigService {
  constructor(private httpClient: HttpClient) { }
}

export const config = mergeApplicationConfig(appConfig, serverConfig);
