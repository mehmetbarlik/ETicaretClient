import { Component } from '@angular/core';
import { RouterLink,RouterLinkActive,RouterOutlet } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { UiModule } from './ui/ui.module';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner'; 
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClientService } from './services/common/http-client.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AdminModule,UiModule,RouterLink,RouterLinkActive,ToastrModule, NgxSpinnerModule,HttpClientModule,CommonModule],
  providers: [{provide: "baseUrl", useValue: "https://localhost:44362/api", multi: true}],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ETicaretClient';
  constructor(private httpClientService: HttpClientService){
    
  }
}


