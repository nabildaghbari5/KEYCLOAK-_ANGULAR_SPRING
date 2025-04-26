import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ProfileApiService } from '../profile-api.service';

import { profiles, setProfiles, loading, setLoading } from '../stores/profile.store';

@Component({
  selector: 'lib-data-access',
  imports: [CommonModule],
  standalone: true,
  template: `
    <div *ngIf="loading()">Loading...</div>
    <ul>
      <li *ngFor="let profile of profiles()">{{ profile.name }}</li>
    </ul>
  `
})
export class DataAccessComponent implements OnInit {
 
  profiles = profiles;
  loading = loading;

  constructor(private profileService:ProfileApiService){

  }

  ngOnInit() {
    setLoading(true);
  /*   this.profileService.getProfiles().subscribe(data => {
      setProfiles(data);
      setLoading(false);
    });*/
  }
}
