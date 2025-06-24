import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatMiniFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { NgFor, NgIf, DatePipe } from '@angular/common';
@Component({
    selector: 'app-event-details',
    templateUrl: './event-details.component.html',
    styleUrls: ['./event-details.component.scss'],
    imports: [
        MatMiniFabButton,
        MatIcon,
        NgFor,
        NgIf,
        DatePipe,
    ],
})
export class EventDetailsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EventDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {

    // console.log(typeof this.data.events[0].starttime, this.data.events[0].starttime)
  }
  close(): void {
    this.dialogRef.close();
  }
}
