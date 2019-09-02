import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  isLinear = false;
  nameform: FormGroup;
  emailform: FormGroup;
  feedbackmsgform: FormGroup;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.nameform = this._formBuilder.group({
      name: ['', Validators.required]
    });
    this.emailform = this._formBuilder.group({
      email: ['', [Validators.email, Validators.required]]
    });
    this.feedbackmsgform = this._formBuilder.group({
      feedback: ['', Validators.required]
    });
  }
  }

