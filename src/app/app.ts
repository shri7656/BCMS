import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './shared/component/nav-bar/nav-bar';
import { loadingService } from './core/services/loading.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  loadingService = inject(loadingService);
  protected readonly title = signal('BCMS-lite');
}
