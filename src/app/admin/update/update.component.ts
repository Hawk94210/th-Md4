import { Component, OnInit } from '@angular/core';
import {LinkService} from "../service/link.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id: any
  links :any[] =[]
  formEditlink?: FormGroup;

  constructor(private linkService: LinkService, private  router: Router,
              private fb:FormBuilder, private activatedRouter: ActivatedRoute) {
    this.activatedRouter.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get("id")
      this.findById(this.id)
    })
  }

  ngOnInit(): void {
    this.formEditlink = this.fb.group({
      tag: [''],
      url: [''],
      descriptions: ['']
    });
  }

  editLink(id:number) {
    let data = this.formEditlink?.value
    this.linkService.edit(id,data).subscribe(() => {
      this.router.navigate([""])
    })
  }
  findById(id:number) {
    this.linkService.findById(id).subscribe(res => {
      this.formEditlink = this.fb.group({
        tag: [res.tag],
        url: [res.url],
        descriptions: [res.descriptions]
      });
    })

  }
}
