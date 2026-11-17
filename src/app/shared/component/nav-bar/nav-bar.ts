import { Component, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss',
})
export class NavBar implements OnInit, OnDestroy {
  sessionTimeout: number = 300;

  remainingSeconds = signal(15 * 60)
  timer: any;

  ngOnInit() {
    this.timer = setInterval(() => {
      this.remainingSeconds.update(time => {
        if (time <= 0) {
          return 0;
        }

        return time - 1;
      });


      if (this.remainingSeconds() === 0) {
        this.ngOnDestroy();
      }
    }, 1000);
  }

  get formattedTime(): string {

    const minutes = Math.floor(this.remainingSeconds() / 60);
    const seconds = this.remainingSeconds() % 60;

    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = undefined;
    }
  }
}
