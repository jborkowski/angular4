import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'p-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private service: ProfileService,
    private router: Router
  ) {}

  submit() {
    this.router.navigate(['/followers'], {
      queryParams: {
        page: 1,
        order: 'newest'
      }
    })
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    this.route.paramMap.subscribe(v => {
      let username = v.get('username');
      this.service.getById(username).subscribe(u => {
        console.log(u);
      });
    });
  }

}
