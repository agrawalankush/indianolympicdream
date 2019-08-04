import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public sports = [
    //'Aquatics',
    'Archery',
    'Athletics',
    'Badminton',
    //'BaseBall&Softball',
    //'Basketball',
    'Boxing',
    //'Canoe',
    //'Cycling',
    'Equestrian',
    'Fencing',
    'Football',
    'Golf',
    'Gymnastics',
    //'Handball',
    'Hockey',
    'Judo',
    'Karate',
    //'ModernPentathlon',
    'Rowing',
    //'Rugby',
    'Sailing',
    'Shooting',
    //'Skateboarding',
    //'SportClimbing',
    'Surfing',
    'TableTennis',
    'Taekwondo',
    'Tennis',
    //'Triathlon',
    'Volleyball',
    'Weightlifting',
    'Wrestling'
    ]
  constructor() { }

  ngOnInit() {
  }

}
