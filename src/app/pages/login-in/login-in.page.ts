import { Component, OnInit } from '@angular/core';
import { NavigatorService } from "../../services/navigator-service/navigator.service";
import { CurrentUserService } from './../../services/current-user-service/current-user.service';


@Component({
  selector: 'app-login-in',
  templateUrl: './login-in.page.html',
  styleUrls: ['./login-in.page.scss'],
})
export class LoginInPage implements OnInit {

  memberUsername:boolean = true;
  memberPassword:boolean = true;

  currentMember:any;

  loginForm = {
    username: '',
    password: '',  
  };

  constructor(private navigatorService: NavigatorService, private currentUserService: CurrentUserService) { }

  ngOnInit() {
  }

  //get data back from storage
  handleLogin(login:any) {
    
    let json:any = localStorage.getItem('members');
    let members = JSON.parse(json);

    console.log(members);

    this.memberUsername = members.map((member:any) => member.username).includes(login.value.username);

    if (  members.map((member:any) => member.username).includes(login.value.username) ) {
      this.currentMember = members.find((member: { username: any; }) => member.username === login.value.username);
      this.currentUserService.setCurrentUser(this.currentMember);
    } else {return}

    if ( (this.currentMember.username === login.value.username) && (this.currentMember.password === login.value.password) ) {
      this.navigatorService.handleNavigation('/tablinks')
    }
    
  }

}
