import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EchartsComponent } from './echarts.component';
import { LineComponent } from './line/line.component';
import { GraphComponent } from './graph/graph.component';
import { PieComponent } from './pie/pie.component';
import { MalaysiaMapComponent } from './malaysia-map/malaysia-map.component';

const routes: Routes = [
  {
    path: '',
    component: EchartsComponent,
    children: [
      {
        path: 'line',
        component: LineComponent,
      },
      {
        path: 'graph',
        component: GraphComponent,
      },
      {
        path: 'pie',
        component: PieComponent,
      },
      {
        path: 'malaysia',
        component: MalaysiaMapComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EchartsRoutingModule {}
