import { Component } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../services/Contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  constructor(private _contactService: ContactService) {}
  public contactForm = new FormGroup({
    email: new FormControl<string>('', [
      Validators.required,
      Validators.maxLength(250),
    ]),
    name: new FormControl<string>('', [
      Validators.required,
      Validators.maxLength(250),
    ]),
    message: new FormControl<string>('', [
      Validators.required,
      Validators.maxLength(250),
    ]),
  });

  get newContact(): Contact {
    const item = this.contactForm.value as Contact;
    return item;
  }
  public onSubmit(): void {
    if (this.contactForm.invalid) return;
    console.log(this.newContact);
    this._contactService.addContact(this.newContact).subscribe((response) => {
      console.log(response);
    });
  }
}
