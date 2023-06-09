import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  standalone:true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private location: Location
    ) { }

  ngOnInit(): void {
  }
  back(): void {
    this.location.back()
  }
}
