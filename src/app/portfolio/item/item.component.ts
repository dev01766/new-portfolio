import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() src: string;
  @Input() title: string; 
  @Input() description: string;
  @Input() tags: string[];

  constructor() { }

  ngOnInit() {
  }

}
