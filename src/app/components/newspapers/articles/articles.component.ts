import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../../services/session.service';
import { NewspaperService } from '../../../services/newspaper.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles;

  constructor(
    private session: SessionService,
    private newspaperService: NewspaperService,
    private router: Router
  ) { }

  ngOnInit() {
    this.newspaperService.getFavoriteArticles()
          .subscribe((myArticles) => {
            this.articles = myArticles;
            console.log(myArticles);
    });
  }

  removeFav(myNew,myArticle){
    let index = this.articles.indexOf(myArticle);
    let id = myArticle[0]._id;
    this.articles.splice(index,1);

    this.newspaperService.removeArticle(myNew,id)
    .subscribe()
  }

  showArticle(myNew){
    window.location.href = myNew.url;
  }

}
