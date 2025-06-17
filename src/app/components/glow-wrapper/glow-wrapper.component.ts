import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-glow-wrapper',
  templateUrl: './glow-wrapper.component.html',
  styleUrls: ['./glow-wrapper.component.scss'],
})
export class GlowWrapperComponent implements OnInit {
  @Input() type = 'secondary';

  constructor() {}

  ngOnInit(): void {}
}
