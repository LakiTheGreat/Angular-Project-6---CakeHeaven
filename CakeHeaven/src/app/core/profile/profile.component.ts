import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Profile } from 'src/app/model/profile.model';
import { CakesService } from 'src/app/service/cakes.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  importedProfile: Profile = new Profile();
  newProfile: Profile = new Profile();
  // regex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$');

  constructor(private service: CakesService) {}
  allowEdit: boolean = false;
  profileChanged: boolean = false;

  ngOnInit(): void {
    this.getProfiles();
  }

  getProfiles() {
    this.service.getProfiles().subscribe({
      next: (data: Profile) => {
        this.importedProfile = data;
        this.newProfile = new Profile(this.importedProfile);
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  onCancel() {
    // this.newProfile = new Profile(this.importedProfile);
    this.newProfile = this.importedProfile;
    this.allowEdit = !this.allowEdit;
  }

  onOk() {
    this.putProfile();
    this.allowEdit = !this.allowEdit;
    this.profileChangedMessage();
    setTimeout(() => this.profileChangedMessage(), 3000);
  }

  profileChangedMessage(): void {
    this.profileChanged = !this.profileChanged;
  }

  putProfile(): void {
    this.service
      .putProfile(this.importedProfile._id, this.newProfile)
      .subscribe({
        next: (data: Profile) => {
          console.log(data);
          this.getProfiles();

          // alert('success');
        },
        error: (err: any) => alert(JSON.stringify(err)),
      });
  }
}
