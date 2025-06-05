import { RenderMode, ServerRoute } from '@angular/ssr';
import { AuthComponent } from './auth/auth.component';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
