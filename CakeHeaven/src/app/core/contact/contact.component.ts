import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from 'src/app/model/message-model';
import { Profile } from 'src/app/model/profile.model';
import { CakesService } from 'src/app/service/cakes.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  profile: Profile = new Profile();
  name: string = '';
  message: string = '';
  newMessage: Message = new Message();

  constructor(private service: CakesService, private router: Router) {}

  ngOnInit(): void {
    this.getProfiles();
  }

  getProfiles() {
    this.service.getProfiles().subscribe({
      next: (data: Profile) => {
        this.profile = data;
        this.name = this.profile.firstName + ' ' + this.profile.lastName;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  onSend() {
    this.newMessage.name = this.name;
    this.newMessage.email = this.profile.email;
    this.newMessage.message = this.message;
    this.postMessage();
  }

  postMessage(): void {
    this.service.postMessage(this.newMessage).subscribe({
      next: (data: Message) => {
        console.log(data);
        console.log('success');
        this.toHome();
      },
      error: (err: any) => alert(JSON.stringify(err)),
    });
  }

  toHome() {
    this.router.navigate(['home']);
  }
}
