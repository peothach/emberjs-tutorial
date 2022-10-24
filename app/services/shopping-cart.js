import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ShoppingCartService extends Service {
  @tracked itemList = [
    {
      name: '1',
    },
    { name: '2' },
  ];

  addItem(item) {
    this.itemList = [...this.itemList, item];
  }
}
