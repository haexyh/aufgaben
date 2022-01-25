import {Component, Input, OnInit} from '@angular/core';
import {IContactInfo} from "../types/contact/IContactInfo";

@Component({
  selector: 'app-contact-summary',
  templateUrl: './contact-summary.component.html',
  styleUrls: ['./contact-summary.component.scss']
})
export class ContactSummaryComponent implements OnInit {

  @Input() contact: IContactInfo | null = null; // ts-ignore

  constructor() {
  }

  ngOnInit(): void {
  }

}
