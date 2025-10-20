import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // ✅ ضروري لـ <router-outlet>

@Component({
  selector: 'app-root',
  standalone: true,          // ✅ مكون مستقل
  imports: [RouterModule],   // ✅ استيراد RouterModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'book-network-ui';
}
