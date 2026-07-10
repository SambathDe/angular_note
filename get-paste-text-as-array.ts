<div class="container">
  <div class="container-header d-flex justify-content-between align-items-start">
    <h3>{{ data?.title | translate }}</h3>
  </div>

  <div class="container">
    <!-- Paste Box -->
    <div class="m-form form-group mb-3">
      <textarea
        class="form-control"
        rows="8"
        [(ngModel)]="pasteText"
        (ngModelChange)="onPasteTextChange()"
        [placeholder]="('enter' | translate) + '' + (data?.filterBy | translate) + '' + ('here' | translate) + ' . . .'">
      </textarea>
      <small class="text-muted mt-1 d-block" *ngIf="parsedValues.length > 0">
        {{ "total_data_amount" | translate }} {{ parsedValues.length }}
      </small>
    </div>

    <!-- Preview chips -->
    <div *ngIf="parsedValues.length > 0" class="parsed-chips mb-3">
      <mat-chip-listbox>
        <mat-chip *ngFor="let val of parsedValues | slice:0:20">{{ val }}</mat-chip>
        <mat-chip *ngIf="parsedValues.length > 20" disabled>
          +{{ parsedValues.length - 20 }} {{ "more" | translate }}
        </mat-chip>
      </mat-chip-listbox>
    </div>

    <!-- Empty state -->
    <div *ngIf="parsedValues.length === 0 && pasteText.trim().length === 0"
      class="d-flex justify-content-center align-items-center py-3">
    </div>
  </div>

  <div class="d-flex justify-content-between align-items-center mt-3">
    <button *ngIf="pasteText.trim().length > 0" mat-button class="m-button-outlined s-md" (click)="onClear()">
      <mat-icon>autorenew</mat-icon>{{ "clear" | translate }}
    </button>
    <div class="ml-auto d-flex gap-1">
      <button mat-button class="m-button-outlined s-md" (click)="onClose()">
        <mat-icon>close</mat-icon>{{ "cancel" | translate }}
      </button>
      <button mat-button class="m-button-primary s-md" (click)="onConfirm()">
        <mat-icon>check</mat-icon>{{ "confirm" | translate }}
      </button>
    </div>
  </div>
</div>
