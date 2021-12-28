import { Component, OnInit } from '@angular/core';
import {LinkService} from "../service/link.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  links :any[] =[]
  formAddlink?: FormGroup;

  constructor(private fb:FormBuilder,
              private  linkService: LinkService) { }

  ngOnInit(): void {
  this.formAddlink = this.fb.group({
    tag: [''],
    url: [''],
    descriptions: ['']
  });
  }
  submit(){
    let data = this.formAddlink?.value;
    // console.log(data);
    this.linkService.addLink(data).subscribe(data => {
      this.links.unshift(data)
    })
    this.formAddlink?.reset();
  }
}
