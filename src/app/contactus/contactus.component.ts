import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  name: string;
  email: string;
  subject: string;
  sendMessage: string;

  Message: string ;
  msgType: string ;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  contactUs() {
    const url = 'https://karunathilakaconstruction.com/contact.php';
    const formData = new FormData();

    if (this.name === undefined || this.email === undefined || this.sendMessage === undefined || this.subject === undefined) {
      this.showMessage('Please Fill The Form', 'danger');
      return;
    }

    formData.append('name', this.name);
    formData.append('email', this.email);
    formData.append('subject', this.subject);
    formData.append('message', this.sendMessage);

    this.http.post(url, formData, {responseType: 'text'}).subscribe((d) => {
      this.showMessage(d, 'success');
    }, (e) => {
      this.showMessage(e, 'danger');
    });
  }

  showMessage(message, type) {
    this.Message = message;
    this.msgType = type;
    const that = this;
    setTimeout(() => that.Message = null, 5000);
  }
}
