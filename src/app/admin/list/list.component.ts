import { Component, OnInit } from '@angular/core';
import {LinkService} from "../service/link.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  links:any[] = []

  constructor(private linkService: LinkService) { }

  ngOnInit(): void {
    this.getAllLink()
  }

  getAllLink(){
    this.linkService.getAll().subscribe(res => {
      this.links = res;
    });
  }

  delete(i:number) {
    let link = this.links[i]
    this.linkService.delete(link.id).subscribe(res => {
      this.links = this.links.filter(
        l => l.id !== link.id
      )
    })
  }
}
