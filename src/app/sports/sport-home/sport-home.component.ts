import { Component, OnInit } from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
interface FoodNode {
  name: string;
  children?: FoodNode[];
}
const ATHLETICS_DATA: FoodNode[] = [
  {
    name: 'Track',
    children: [
      {name: '100m (Men/Women)'},
      {name: '200m (Men/Women)'},
      {name: '400m (Men/Women)'},
      {name: '800m (Men/Women)'},
      {name: '1,500m (Men/Women)'},
      {name: '5,000m (Men/Women)'},
      {name: '10,000 (Men/Women)'},
      {name: '110m Hurdles (Men)'},
      {name: '100 Hurdles (Women)'},
      {name: '400m Hurdles (Men/Women)'},
      {name: '3,000 Steeplechase (Men/Women)'},
      {name: '4 * 100m Relay (Men/Women)'},
      {name: '4 * 400m Relay (Men/Women)'},
      {name: '4 * 400m Mixed Relay'}
    ]
  }, {
    name: 'Field',
    children: [
      {name: 'High Jump (Men/Women)'},
      {name: 'Pole Vault (Men/Women)'},
      {name: 'Long Jump (Men/Women)'},
      {name: 'Triple Jump (Men/Women)'},
      {name: 'Shot Put (Men/Women)'},
      {name: 'Discus Throw (Men/Women)'},
      {name: 'Hammer Throw (Men/Women)'},
      {name: 'Javelin Throw (Men/Women)'}
    ]
  },
  {
    name: 'Road',
    children: [
      {name: '20km Race Walk (Men/Women)'},
      {name: 'Marathon (Men/Women)'},
      {name: '50km Race Walk (Men)'},
    ]
  },
  {
    name: 'Decathlon and Heptathlon',
    children: [
      {name: 'Decathlon (Men)'},
      {name: 'Heptathlon (Women)'}
    ]
  },
];
@Component({
  selector: 'app-sport-home',
  templateUrl: './sport-home.component.html',
  styleUrls: ['./sport-home.component.scss']
})
export class SportHomeComponent implements OnInit {
  
  
  
  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  constructor() {
    this.dataSource.data = ATHLETICS_DATA;
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;

  ngOnInit() {
  }

}
