import { signal, computed } from '@angular/core';
import { Profile } from '../models/profile.model';


export const profiles = signal<any[]>([]);
export const loading = signal(false);

export function setProfiles(data: any[]) {
  profiles.set(data);
}

export function setLoading(value: boolean) {
  loading.set(value);
}
export function getProfiles() {
  return profiles();
}

export const profile = signal<Profile | null>(null);

export const hasProfile = computed(() => !!profile());

export const error = signal<string | null>(null);

