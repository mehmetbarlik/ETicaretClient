import { Component } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { UiModule } from './ui/ui.module';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner'; 
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AdminModule,UiModule,RouterLink,ToastrModule, NgxSpinnerModule,HttpClientModule],
  providers: [{provide: "baseUrl", useValue: "https://localhost:44362/api", multi: true}],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ETicaretClient';
  constructor(){
    
  }
}


