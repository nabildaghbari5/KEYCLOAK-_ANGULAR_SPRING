import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { loadProfile } from '../../../../shared/data/src/lib/stores/load-profile';
import { profile, hasProfile } from '../../../../shared/data/src/lib/stores/profile.store';



@Component({
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'app-root',
  template: `
    <h1>TalentCloud</h1>
    <div *ngIf="hasProfile(); else loading">
      <p>Name: {{ profile()?.name }}</p>
      <p>Email: {{ profile()?.email }}</p>
    </div>
    <ng-template #loading>
      <p>Loading profile...</p>
    </ng-template>
  `
})
export class AppComponent  implements OnInit {
  title = 'TalentCloud';

  profile = profile;
  hasProfile = hasProfile;

  ngOnInit(): void {
    loadProfile(); // This will inject the service and update the signal
  }
}

