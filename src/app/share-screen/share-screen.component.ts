import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-share-screen',
  templateUrl: './share-screen.component.html',
  styleUrls: ['./share-screen.component.css']
})
export class ShareScreenComponent {
  showShare = false;
  contactEmail = "";
  message="";
  urlToShare=window.location.href;

  hideBox() {
    return this.showShare;
  }

  showIt() {
    this.showShare = false;
  }
  closeShare() {
    this.showShare = true;
  }

  sharePage() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.contactEmail)){
      var request = new XMLHttpRequest();
      request.open('POST', 'https://private-anon-99d310306c-blissrecruitmentapi.apiary-mock.com/share?destination_email='+this.contactEmail+'&content_url'+this.urlToShare+'amp;');
      request.onreadystatechange = function () {
        if (this.readyState === 4) {
          console.log('Status:', this.status);
          console.log('Headers:', this.getAllResponseHeaders());
          console.log('Body:', this.responseText);
        }
      };
      request.send();
      this.message="E-mail sent."
    } else {
      this.message="Invalid E-mail"
    }
  }
}
