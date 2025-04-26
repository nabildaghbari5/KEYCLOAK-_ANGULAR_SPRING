import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
 /* {
    path: 'TalentCloud',
    loadChildren: () =>
      import('TalentCloud/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'interview-mfe',
    loadChildren: () =>
      import('interview_mfe/Routes').then((m) => m!.remoteRoutes),
  },

   */
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
