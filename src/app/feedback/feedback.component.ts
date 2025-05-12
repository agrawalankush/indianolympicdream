import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SportsdataService } from '../sportsdata.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-feedback',
    templateUrl: './feedback.component.html',
    styleUrls: ['./feedback.component.scss'],
    standalone: false
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
            name: ['', Validators.required],
            email: ['', [Validators.email]],
            feedback: ['', Validators.required]
        });
    }

    onSubmit() {
        if (this.feedbackForm.valid) {
            this.sportsService.postfeedback(this.feedbackForm.value).subscribe({
                next: () => {
                    this.snackBar.open('Thank You, You Beautiful Soul!!', 'Close', {
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
