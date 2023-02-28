import { Component } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {
  options = this._formBuilder.group({
    bottom: 0,
    fixed: true,
    top: 0,
});
constructor(private _formBuilder: FormBuilder) {}
shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
sideButtons = [
  {
    text: 'Ravens',
    rooting: "bodyRavens",
    img: '../../../assets/images/buttons/ravenGOWedit2.jpg'
  },
  {
    text: 'Valkyries',
    rooting: "bodyValk",
    id:1,
    img: '../../../assets/images/buttons/valkyries.jpg'
  }
]
}