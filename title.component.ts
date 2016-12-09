import { Component, Input } from '@angular/core';
import { UserService } from './user.service';

@Component({
	moduleId: module.id,
	selector: 'app-title',
	templateUrl: 'title.component.html',
	styleUrls: ['title.component.css'],
})
export class TitleComponent {
	@Input() subtitle = '';
	title = '仓库管理 By FancyAlen';
	user = '';

	constructor(userService: UserService) {
		this.user = userService.userName;
	}
}