import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public onArchives = () => {
    this.router.navigate(['archives']);
  }

  public onUpload = () => {
    this.router.navigate(['upload']);
  }
}
