import { Component } from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(private toastr: ToastrService) { }

  onGetOwnerLink() {
    this.toastr.success('Thanks for the interest but I don\'t have a website yet.');
  }

}
