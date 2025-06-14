import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';

interface DialogData {
  events: any[];
  category: string;
  sportName: string;
}

@Component({
  selector: 'app-events-dialog',
  template: `
    <h2 mat-dialog-title>{{data.category | titlecase}} Events</h2>
    <mat-dialog-content>
      <ng-container [ngSwitch]="data.sportName">
        <table *ngSwitchCase="'Athletics'" mat-table [dataSource]="data.events">
          <ng-container matColumnDef="Event">
            <th mat-header-cell *matHeaderCellDef>Event</th>
            <td mat-cell *matCellDef="let element">{{element.name}}</td>
          </ng-container>
          <ng-container matColumnDef="WR">
            <th mat-header-cell *matHeaderCellDef>NR</th>
            <td mat-cell *matCellDef="let element">{{element.WR}}</td>
          </ng-container>
          <ng-container matColumnDef="WR_holder">
            <th mat-header-cell *matHeaderCellDef>WR Holder</th>
            <td mat-cell *matCellDef="let element">{{element.WR_holder}}</td>
          </ng-container>
          <ng-container matColumnDef="EntryStandard">
            <th mat-header-cell *matHeaderCellDef>Entry Standard</th>
            <td mat-cell *matCellDef="let element">{{element.qualificationstandard}}</td>
          </ng-container>
          <ng-container matColumnDef="NR">
            <th mat-header-cell *matHeaderCellDef>NR</th>
            <td mat-cell *matCellDef="let element">{{element.NR}}</td>
          </ng-container>
          <ng-container matColumnDef="NR_holder">
            <th mat-header-cell *matHeaderCellDef>NR Holder</th>
            <td mat-cell *matCellDef="let element">{{element.NR_holder}}</td>
          </ng-container>
          <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
          <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
        </table>
        
        <mat-list *ngSwitchDefault>
          <mat-list-item *ngFor="let event of data.events">
            <span matListItemTitle>{{event.name}}</span>
            <span matListItemLine *ngIf="event.category">{{event.category}}</span>
            <div matListItemLine *ngIf="isJudoMixed(event)">
              Men-{{event.men}} | Women-{{event.women}}
            </div>
          </mat-list-item>
        </mat-list>
      </ng-container>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Close</button>
    </mat-dialog-actions>
  `,
  styles: [`
    :host {
      display: block;
    }
    table { 
      width: 100%;
    }
    .mat-mdc-dialog-content { 
      max-height: 70vh;
      padding: 16px;
    }
  `],
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatTableModule, MatButtonModule, MatListModule]
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
