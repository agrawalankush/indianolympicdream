import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { interval } from 'rxjs';
import { MatSnackBar } from '@angular/material';
@Injectable({
  providedIn: 'root'
})
export class SwupdateService {

  constructor(public updates: SwUpdate, public snackBar: MatSnackBar) {
    // If updates are enabled
    if (updates.isEnabled) {
      // poll the service worker to check for updates
      interval(6 * 60 * 60).subscribe(() => updates.checkForUpdate());
    }
  }
  // Called from app.components.ts constructor
  public checkForUpdates() {
    if (this.updates.isEnabled) {
      this.updates.available.subscribe(event => {
        console.log('current version is', event.current);
        console.log('available version is', event.available);
        this.promptUser(event);
      });
      this.updates.activated.subscribe(event => {
        console.log('old version was', event.previous);
        console.log('new version is', event.current);
      });
    }
  }

  // If there is an update, promt the user
  private promptUser(e): void {
    if (e.available) {
      const snackBarRef = this.snackBar.open(
        'A new version of app is available',
        'Update',
        {horizontalPosition: 'left'}
      );
      snackBarRef.onAction().subscribe(() => document.location.reload());
    }
  }
}
