import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EchartsComponent } from './echarts.component';
import { LineComponent } from './line/line.component';

const routes: Routes = [
  {
    path: '',
    component: EchartsComponent,
    children: [
      {
        path: 'line',
        component: LineComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EchartsRoutingModule {}
