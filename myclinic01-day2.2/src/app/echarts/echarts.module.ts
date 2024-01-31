import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EchartsRoutingModule } from './echarts-routing.module';
import { EchartsComponent } from './echarts.component';
import { LineComponent } from './line/line.component';
import { EchartsxModule } from 'echarts-for-angular';
import { GraphComponent } from './graph/graph.component';
import { PieComponent } from './pie/pie.component';

@NgModule({
  declarations: [EchartsComponent, LineComponent, GraphComponent, PieComponent],
  imports: [CommonModule, EchartsRoutingModule, EchartsxModule],
})
export class EchartsModule {}
