import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SkillsComponent } from '../skills/skills.component'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  skill(){
    this.router.navigate([''],{ fragment: 'ss'});
  }

}
