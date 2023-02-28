import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  image = "../../../assets/images/header/GOW3Button.jpg";
functionChangeImgGOW3(){
  console.log("GOWR_IMG");
  this.image = "../../../assets/images/header/GOW3Button.jpg"
  console.log(this.image)
}
functionChangeImgGOW4(){
  console.log("GOWR_IMG");
  this.image = "../../../assets/images/header/GOW4Button.jpg"
  console.log(this.image)
}
functionChangeImgGOWR(){
    console.log("GOWR_IMG");
    this.image = "../../../assets/images/header/GOWRagnaButton.jpg"
    console.log(this.image)
}
}
 