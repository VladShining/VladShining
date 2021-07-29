import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  callNumber() {
    this.dialog.open(PhoneDialog, {});
  }
  sendMail() {
    window.open('mailto:vladshining@gmail.com,rrruddyh@gmail.com');
  }
  sendMessage() {
    const dialogRef = this.dialog.open(MessageDialog);

    dialogRef.afterClosed().subscribe(result => {
      result && this.dialog.open(MessageConfirm);
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {}
}
@Component({
  selector: 'phone',
  templateUrl: 'phone.html'
})
export class PhoneDialog {}
@Component({
  selector: 'message',
  templateUrl: 'message.form.html'
})
export class MessageDialog {
  data: string[];
  constructor(public dialogRef: MatDialogRef<MessageDialog>) {
    this.data = [];
  }
  closeDialog() {
    this.dialogRef.close();
  }
  submit(msg: string, name: string) {
    this.dialogRef.close(`${msg} ,by:${name}`);
  }
}
@Component({
  selector: 'msg',
  template: `
    <p>Votre message à bien été envoyer</p>
  `
})
export class MessageConfirm {}
