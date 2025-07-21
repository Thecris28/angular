import { Component, input } from '@angular/core';
import { GifsListItem } from './gifs-list-item/gifs-list-item';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-gifs-list',
  imports: [GifsListItem],
  templateUrl: './gifs-list.html',
  styleUrl: './gifs-list.css'
})
export class GifsList {
  images = input.required<string[]>();
}
