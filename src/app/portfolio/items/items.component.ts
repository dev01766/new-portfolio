import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  public paths: string[] = [
    '/calculator',
    '/roman',
    '/wordsclock',
    '/mengenlehreuhr',
    '/binaryclock',
    '/weather',
    '/texteditor',
    '/pomodoro'
  ];

  public srcs: string[] = [
    '../../assets/img/calculator.png',
    '../../assets/img/roman.png',
    '../../assets/img/wordsclock.png',
    '../../assets/img/mengenlehreuhr.png',
    '../../assets/img/binaryclock.png',
    '../../assets/img/weather.png',
    '../../assets/img/texteditor.png',
    '../../assets/img/pomodoro.png',
  ];

  public titles: string[] = [
    'Calculator',
    'Roman Converter',
    'Words Clock',
    'Mengenlehreuhr',
    'Binary Clock',
    'Current Weather',
    'Text Editor',
    'Pomodoro Timer'
  ];

  public descriptions: string[] = [
    'Calculator with memory functions.',
    'Roman numerals converter.',
    'Clock that displays time with words.',
    'Clock currently installed in Berlin.',
    'Clock that displays time in binary numbers.',
    'Current weather conditions app with search function.',
    'Simple text editor using browser commands.',
    'Fully-fledged Pomodoro Timer'
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
