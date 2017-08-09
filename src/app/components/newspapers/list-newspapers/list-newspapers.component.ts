import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../../services/session.service';
import { NewspaperService } from '../../../services/newspaper.service';

@Component({
  selector: 'app-list-newspapers',
  templateUrl: './list-newspapers.component.html',
  styleUrls: ['./list-newspapers.component.css']
})
export class ListNewspapersComponent implements OnInit {

  newspapers;

  constructor(
    private session: SessionService,
    private newspaperService: NewspaperService,
    private router: Router
  ) { }

  ngOnInit() {
    this.newspaperService.getNewspapers()
          .subscribe((newspaper) => {
            this.newspapers = newspaper;
    });
  }

  suscribe(id){
      this.newspaperService.suscribe(id)
        .subscribe((res) =>{
        });
    }


}
