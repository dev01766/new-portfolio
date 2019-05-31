import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  public paths: string[] = [
    'https://asilva.netlify.com/calculator.html',
    'https://asilva.netlify.com/roman.html',
    'https://asilva.netlify.com/wordsclock.html',
    'https://asilva.netlify.com/mengenlehreuhr.html',
    'https://asilva.netlify.com/binaryclock.html',
    'https://asilva.netlify.com/weather.html',
    'https://asilva.netlify.com/texteditor.html',
    'https://asilva.netlify.com/pomodoro.html'
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

  public tags: string[][] = [
    ['CSS', 'JS'], 
    ['CSS', 'jQuery'],
    ['CSS', 'jQuery'],
    ['CSS', 'jQuery'],
    ['CSS', 'jQuery'],
    ['CSS', 'jQuery', 'API'],
    ['CSS', 'jQuery'],
    ['CSS', 'jQuery']
  ];

  constructor() { }

  ngOnInit() {
  }

}
