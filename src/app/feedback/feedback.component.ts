import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { SportsdataService } from '../sportsdata.service';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  isLinear = false;
  nameform: FormGroup;
  emailform: FormGroup;
  successmsg:string;
  errmsg:string;
  feedbackmsgform: FormGroup;
  @ViewChild('stepper',{static: false}) el:ElementRef;
  constructor(private _formBuilder: FormBuilder,
              private postdataservice: SportsdataService) { }

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
  get name() {
    return this.nameform.get('name').value;
  }
  get email() {
    return this.emailform.get('email').value;
  }
  get feedback() {
    return this.feedbackmsgform.get('feedback').value;
  }
  public submitfeedback() {
    const feedbackjson = {
      name: this.name,
      email: this.email,
      feedback: this.feedback
    }
    this.postdataservice.postfeedback(feedbackjson)
    .subscribe(
      (feedbackres:any) =>{
        // console.log(feedbackres);
        this.successmsg = 'Your feedback has been recorded, Thanks you for taking time and writing!!';
      },
      (error) =>{
        this.errmsg = error.error;
        console.log(error);
      }
    )
  }
  }

