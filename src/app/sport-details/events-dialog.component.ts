import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

interface DialogData {
  events: any[];
  category: string;
  sportName: string;
}

@Component({
  selector: 'app-events-dialog',
  template: `
    <div class="event-details-container">
      <div class="event-details-header">
        <h2 mat-dialog-title class="sport-title">
          <img class="pictogram-button-image" src="assets/images/pictograms/icons/{{data.sportName}}.png" alt="{{data.sportName}} pictogram" />
          <span>{{data.category | titlecase}} Events</span>
        </h2>
        <button mat-mini-fab color="primary" class="close-btn" (click)="dialogRef.close()">
          <mat-icon>clear</mat-icon>
        </button>
      </div>
      <mat-dialog-content>
        <ng-container [ngSwitch]="data.sportName">
          <table *ngSwitchCase="'Athletics'" mat-table [dataSource]="data.events">
            <ng-container matColumnDef="Event">
              <th mat-header-cell *matHeaderCellDef>Event</th>
              <td mat-cell *matCellDef="let element">{{element.name}}</td>
            </ng-container>
            <ng-container matColumnDef="WR">
              <th mat-header-cell *matHeaderCellDef>WR</th>
              <td mat-cell *matCellDef="let element">{{element.WR === '' ? 'N/A' : element.WR}}</td>
            </ng-container>
            <ng-container matColumnDef="WR_holder">
              <th mat-header-cell *matHeaderCellDef>WR Holder</th>
              <td mat-cell *matCellDef="let element">{{element.WR_holder === '' ? 'N/A' : element.WR_holder}}</td>
            </ng-container>
            <ng-container matColumnDef="EntryStandard">
              <th mat-header-cell *matHeaderCellDef>Entry Standard</th>
              <td mat-cell *matCellDef="let element">{{element.qualificationstandard === '' ? 'N/A' : element.qualificationstandard}}</td>
            </ng-container>
            <ng-container matColumnDef="NR">
              <th mat-header-cell *matHeaderCellDef>NR</th>
              <td mat-cell *matCellDef="let element">{{element.NR === '' ? 'N/A' : element.NR}}</td>
            </ng-container>
            <ng-container matColumnDef="NR_holder">
              <th mat-header-cell *matHeaderCellDef>NR Holder</th>
              <td mat-cell *matCellDef="let element">{{element.NR_holder === '' ? 'N/A' : element.NR_holder}}</td>
            </ng-container>
            <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
            <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
          </table>
          
          <mat-list *ngSwitchDefault>
            <mat-list-item *ngFor="let event of data.events" class="event-list-item">
              <span matListItemTitle>{{event.name}}</span>
              <span matListItemLine *ngIf="event.category">{{event.category}}</span>
              <div matListItemLine *ngIf="isJudoMixed(event)">
                Men-{{event.men}} | Women-{{event.women}}
              </div>
            </mat-list-item>
          </mat-list>
        </ng-container>
      </mat-dialog-content>
    </div>
  `,
  styleUrls: ['./events-dialog.component.scss'],
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatTableModule, MatButtonModule, MatListModule, MatIcon]
})
export class EventsDialogComponent {
  readonly displayedColumns = ['Event', 'WR', 'WR_holder', 'EntryStandard', 'NR', 'NR_holder'];

  constructor(
    public dialogRef: MatDialogRef<EventsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  private isJudoMixed(event: any): boolean {
    return this.data.sportName === 'Judo' && this.data.category === 'mixed';
  }
}
