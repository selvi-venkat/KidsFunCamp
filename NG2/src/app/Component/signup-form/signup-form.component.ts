import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { UserRegisterationService } from 'src/app/Service/user-registeration.service';
import { userRegModel } from 'src/app/Model/userRegister.model';
import { Router } from '@angular/router';
import { outputAst } from '@angular/compiler';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent implements OnInit {
  @ViewChild('addressDelete') deleteSpan!: ElementRef;
  @ViewChild('addressControls') addressListControls!: ElementRef;
  selectedInterestValues: string[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private userRegService: UserRegisterationService,
    private router: Router
  ) {}
  ngAfterViewInit() {
    // this.deleteSpan.nativeElement.innerHTML('It is mandatory to have atleast one address');
  }
  ngOnInit() {
    this.userRegService.fetchUserDetails();
  }
  genders: Array<string> = ['male', 'female', 'others'];
  interests: string[] = ['Art', 'Painting', 'Drawing', 'Any Sports'];

  signupForm = this.formBuilder.group({
    userName: [
      '',
      [Validators.required, Validators.minLength(8), Validators.maxLength(20)],
    ],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
    address: this.formBuilder.array([this.addAddress()]),
    interest: this.formBuilder.array(this.loadInterestControls()),
    gender: ['male', Validators.required],
    contactNumber: this.formBuilder.array([this.addContactList()]),
  });
  loadInterestControls() {
    const interestLoad = this.interests.map((value) => {
      //let checkedValue = value == 'Drawing' ? true : false;
      return this.formBuilder.control(false);
    });
    return interestLoad;
  }
  addAddress() {
    return this.formBuilder.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipcode: ['', Validators.required],
    });
  }
  addContactList() {
    return this.formBuilder.control('', [Validators.required]);
  }
  getSelectedInterests() {
    this.selectedInterestValues = [];
    this.interestList.controls.forEach((control, i) => {
      if (control.value) {
        this.selectedInterestValues.push(this.interests[i]);
      }
    });
    return this.selectedInterestValues;
  }
  get getUserName() {
    return this.signupForm.get('userName');
  }
  get getEmail() {
    return this.signupForm.get('email');
  }
  get contacts() {
    return <FormArray>this.signupForm.get('contactNumber');
  }
  get interestList(): FormArray {
    return <FormArray>this.signupForm.get('interest');
  }
  get addressList(): FormArray {
    return <FormArray>this.signupForm.get('address');
  }
  addContacts() {
    this.contacts.push(this.addContactList());
  }
  addAddressExtension() {
    this.deleteSpan.nativeElement.innerHTML = '';
    return this.addressList.push(this.addAddress());
  }
  removeAddressExtension(i: number) {
    this.deleteSpan.nativeElement.innerHTML = '';
    if (this.addressListControls.nativeElement.childElementCount > 1) {
      return this.addressList.removeAt(i);
    } else {
      this.deleteSpan.nativeElement.innerHTML =
        'It is mandatory to have atleast one address';
    }
  }
  removeContacts(i: any) {
    return this.contacts.removeAt(i);
  }
  register() {
    const interestValues = this.selectedInterestValues;
    console.log({ ...this.signupForm.value, interestValues });
    const userData: any = { ...this.signupForm.value, interestValues };
    this.userRegService.registerUserSubmit(userData);
    this.signupForm.reset();
    this.router.navigate(['/account']);
  }
}
