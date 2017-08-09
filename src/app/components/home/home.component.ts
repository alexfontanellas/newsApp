import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service';
import { NewsApi } from '../../services/newsApi.service';

import { NewspaperService } from '../../services/newspaper.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  articles = [];

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
                      // Do another suscribe to the actual news API and push them into the array
                      // which will be displayed in the HTML
                        let url = newspaper[0].request_link;
                        this.newsApi.getArticles(url)
                        .subscribe((hello) => {
                          // Do another suscribe to t
                            this.articles.push(hello);
                          });


                      });
            });
    });

  }

  showArticle(myNew){
    window.location.href = myNew.url;
  }

  fav(myNew){
    this.newspaperService.saveArticle(myNew)
    .subscribe()
  }

}
