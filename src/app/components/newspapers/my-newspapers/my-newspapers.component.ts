import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../../services/session.service';
import { NewsApi } from '../../../services/newsApi.service';

import { NewspaperService } from '../../../services/newspaper.service';



@Component({
  selector: 'app-my-newspapers',
  templateUrl: './my-newspapers.component.html',
  styleUrls: ['./my-newspapers.component.css']
})
export class MyNewspapersComponent implements OnInit {

  newspapers = [];

  constructor(
    private session: SessionService,
    private newspaperService: NewspaperService,
    private newsApi: NewsApi,
    private router: Router
  ) { }


  ngOnInit() {
    this.newspaperService.getSuscribedNewspaper()
          .subscribe((user) => {
            user[0].newspapersSubscription.forEach((element) => {
              this.newspaperService.getNewspaper(element)
                    .subscribe((newspaper) => {
                        this.newspapers.push(newspaper[0]);

                      });
            });
    });

  }

  unsuscribe(id,newspaper){
    let index = this.newspapers.indexOf(newspaper);
    this.newspapers.splice(index,1);
    this.newspaperService.unsuscribe(id)
      .subscribe();
  }

}
