import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { FoodSearchService } from './food-search.service';
import { Food } from './food';

@Component({
  moduleId: module.id,
  selector: 'food-search',
  templateUrl: 'food-search.component.html',
  styleUrls: ['food-search.component.css'],
  providers: [FoodSearchService]
})

export class FoodSearchComponent implements OnInit {
  foods: Observable<Food[]>;
  private searchTerms = new Subject<string>();
  constructor(
    private foodSearchService: FoodSearchService,
    private router: Router) { }
  // 传送一个搜索对象
  search(term: string): void {
    this.searchTerms.next(term);
  }
  ngOnInit(): void {
    this.foods = this.searchTerms
      .debounceTime(300)        // 等待300ms传送最终字符
      .distinctUntilChanged()   // 只在条件变化时才发送请求
      .switchMap(term => term   // 调用搜索服务，保留最近对象
        // 返回HTTP搜索对象
        ? this.foodSearchService.search(term)
        // 返回包含空数组的可观察对象，清空搜索结果
        : Observable.of<Food[]>([]))
      .catch(error => {
        // 简单捕获异常
        console.log(error);
        return Observable.of<Food[]>([]);
      });
  }
  gotoDetail(food: Food): void {
    let link = ['/detail', food.id];
    this.router.navigate(link);
  }
}
