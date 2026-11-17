import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class loadingService {
  private loadingCount = signal(0);

  isLoading = computed(() => this.loadingCount() > 0);

  show(): void {
    this.loadingCount.update(count => count + 1);
  }

  hide(): void {
    this.loadingCount.update(count => Math.max(0, count - 1));
  }
}
