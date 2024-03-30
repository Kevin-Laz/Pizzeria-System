import { AfterViewInit, Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'Pizzeria-System';
  ngAfterViewInit() {

  }
  /*@HostListener('window:scroll', ['$event'])
  onScroll() {
    console.log('ScrollX:', window.scrollX, 'ScrollY:', window.scrollY);
  }*/
}
