import { inject } from '@angular/core';
import { ProfileApiService } from '../profile-api.service';
import { profile, loading,error } from './profile.store';

export function loadProfile() {
    const service = inject(ProfileApiService);
    loading.set(true);
    error.set(null);
  
    service.getProfile().subscribe({
      next: (result) => profile.set(result),
      error: (err) => error.set('Failed to load profile'),
      complete: () => loading.set(false),
    });
  }
  