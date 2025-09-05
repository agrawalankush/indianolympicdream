import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tokyo-2025-wc',
  imports: [MatToolbar, MatButtonModule, RouterOutlet, RouterLink],
  templateUrl: './tokyo-2025-wc.component.html',
  styleUrl: './tokyo-2025-wc.component.scss'
})
export class Tokyo2025WcComponent {

}
