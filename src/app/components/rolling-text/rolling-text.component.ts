import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rolling-text',
  templateUrl: './rolling-text.component.html',
  styleUrls: ['./rolling-text.component.scss'],
})
export class RollingTextComponent implements OnInit {
  @Input() text = 'MARS SIEGE - MARS SIEGE - MARS SIEGE - ';
  @Input() textColor = '';
  @Input() size = '';

  constructor() {}

  ngOnInit(): void {}
}
