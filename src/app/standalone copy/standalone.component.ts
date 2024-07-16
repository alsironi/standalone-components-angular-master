import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../standalone/components/button/button.component';

@Component({
  selector: 'app-standalone2',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './standalone.component.html',
  styleUrls: ['./standalone.component.scss'],
})
export class StandaloneComponent2 implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
