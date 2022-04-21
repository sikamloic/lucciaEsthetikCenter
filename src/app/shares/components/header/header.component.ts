import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() headerChange = false;
  @Input() contactActive = false;
  @Input() salonActive = false;
  @Input() homeActive = false;
  items = [
    {name:'accueil', icon: 'assets/home.svg', link:'/acceuil'},
    {name:'salon', icon: 'assets/salon.svg', link:'/salon'},
    {name:'contact', icon: 'assets/contact.svg', link:'/contact'},
  ];
  showMenu = false;
  constructor() { }

  close(e:any){
    // console.log(e)
    // if(e.isTrusted){
    //   this.showMenu = false;
    // }

  }

  ngOnInit(): void {
  }

}
