import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './private.component';

const routes: Routes = [
	{
		path: '',
		component: PrivateComponent,
		children: [
			{
				path: '',
				redirectTo: 'projects',
				pathMatch: 'full'
			},
			{
				path: 'projects',
				loadChildren: () => import('./pages/projects/projects.module').then(m => m.ProjectsModule)
			},
			{
				path: 'projects/new',
				loadChildren: () => import('./pages/create-project/create-project.module').then(m => m.CreateProjectModule)
			},
			{
				path: 'projects/:id',
				loadChildren: () => import('./pages/project/project.module').then(m => m.ProjectModule)
			},
			{
				path: 'app-portal/:token',
				loadChildren: () => import('./pages/app/app.module').then(m => m.AppModule)
			},
			{
				path: 'team',
				loadChildren: () => import('./pages/teams/teams.module').then(m => m.TeamsModule)
			},
			{
				path: 'user-settings',
				loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule)
			},
			{
				path: 'settings',
				loadComponent: () => import('./pages/settings/settings.component').then(mod => mod.SettingsComponent)
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PrivateRoutingModule {}
