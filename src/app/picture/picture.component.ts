import {Component, Input, OnInit} from '@angular/core';
import {IPicture} from "../types/picture/IPicture";

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss']
})
export class PictureComponent implements OnInit {

  @Input() picture: IPicture | null = null;
  @Input() showThumbnailAsFallback: boolean = false;

  constructor() {
  }

  get pictureLink(): string | null {
    if (this.picture?.picture == null && this.showThumbnailAsFallback)
      return this.picture?.thumbnail ?? null;
    return this.picture?.picture ?? null;

  }

  ngOnInit(): void {
  }

}
