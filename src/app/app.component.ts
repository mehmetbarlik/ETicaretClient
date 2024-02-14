import { Component } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { UiModule } from './ui/ui.module';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AdminModule,UiModule,RouterLink,ToastrModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ETicaretClient';
  constructor(private toastrService : CustomToastrService){
    
    toastrService.message("Merhaba","Mehmet", {messageType: ToastrMessageType.Info, position: ToastrPosition.TopCenter});
    toastrService.message("Merhaba","Mehmet", {messageType: ToastrMessageType.Success, position: ToastrPosition.BottomCenter});
    toastrService.message("Merhaba","Mehmet", {messageType: ToastrMessageType.Error, position: ToastrPosition.BottomRight});
    toastrService.message("Merhaba","Mehmet", {messageType: ToastrMessageType.Warning, position: ToastrPosition.TopRight});
  }
}


