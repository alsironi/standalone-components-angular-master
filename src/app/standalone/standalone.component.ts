import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';

@Component({
  selector: 'app-standalone',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './standalone.component.html',
  styleUrls: ['./standalone.component.scss'],
})
export class StandaloneComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
