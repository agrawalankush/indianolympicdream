import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SportsdataService } from '../sportsdata.service';
import { Router } from '@angular/router';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatAnchor, MatFabButton } from '@angular/material/button';
import { MatFormField, MatLabel, MatInput, MatSuffix, MatHint } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { MatRadioGroup, MatRadioButton } from '@angular/material/radio';

@Component({
    selector: 'app-feedback',
    templateUrl: './feedback.component.html',
    styleUrls: ['./feedback.component.scss'],
    imports: [MatCard, MatAnchor, MatCardContent, FormsModule, ReactiveFormsModule, MatFormField, MatLabel, MatInput, MatIcon, MatSuffix, MatHint, MatRadioGroup, MatRadioButton, MatFabButton]
})
export class FeedbackComponent {
    feedbackForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private sportsService: SportsdataService,
        private snackBar: MatSnackBar,
        private router: Router
    ) {
        this.feedbackForm = this.fb.group({
            name: ['', [Validators.required, Validators.maxLength(24)]],
            email: [''],
            preferredTheme: ['dark'], // Default value set to light
            feedback: ['', [Validators.required, Validators.maxLength(500)]]
        });
    }

    onSubmit() {
        if (this.feedbackForm.valid) {
            this.sportsService.postfeedback(this.feedbackForm.value).subscribe({
                next: () => {
                    this.snackBar.open('Thank You, You Beautiful Creature!!', 'Close', {
                        duration: 5000,
                        horizontalPosition: 'center',
                        verticalPosition: 'bottom',
                        panelClass: ['snackbar-success']
                    });
                    this.router.navigate(['/home']);
                },
                error: (err) => {
                    this.snackBar.open(err, 'Close', {
                        duration: 5000,
                        horizontalPosition: 'center',
                        verticalPosition: 'bottom',
                        panelClass: ['snackbar-error']
                    });
                }
            });
        }
    }
}
