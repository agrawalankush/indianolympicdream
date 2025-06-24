"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsDialogComponent = void 0;
const core_1 = require("@angular/core");
const dialog_1 = require("@angular/material/dialog");
const table_1 = require("@angular/material/table");
const button_1 = require("@angular/material/button");
const list_1 = require("@angular/material/list");
const common_1 = require("@angular/common");
let EventsDialogComponent = (() => {
    let _classDecorators = [(0, core_1.Component)({
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
            imports: [common_1.CommonModule, dialog_1.MatDialogModule, table_1.MatTableModule, button_1.MatButtonModule, list_1.MatListModule]
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var EventsDialogComponent = _classThis = class {
        constructor(dialogRef, data) {
            this.dialogRef = dialogRef;
            this.data = data;
            this.displayedColumns = ['Event', 'WR', 'WR_holder', 'EntryStandard', 'NR', 'NR_holder'];
        }
        isJudoMixed(event) {
            return this.data.sportName === 'Judo' && this.data.category === 'mixed';
        }
    };
    __setFunctionName(_classThis, "EventsDialogComponent");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        EventsDialogComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return EventsDialogComponent = _classThis;
})();
exports.EventsDialogComponent = EventsDialogComponent;
