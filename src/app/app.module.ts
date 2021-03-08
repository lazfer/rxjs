import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { IntervalComponent } from './interval/interval.component';
import { FromeventComponent } from './fromevent/fromevent.component';
import { FiltermapComponent } from './filtermap/filtermap.component';
import { ShareobsComponent } from './shareobs/shareobs.component';
import { TakecontacComponent } from './takecontac/takecontac.component';
import { BuffertimeComponent } from './buffertime/buffertime.component';
import { ForkjoinComponent } from './forkjoin/forkjoin.component';
import { ConcatmapComponent } from './concatmap/concatmap.component';
import { SwitchmapComponent } from './switchmap/switchmap.component';
import { ScanComponent } from './scan/scan.component';
import { SubjectComponent } from './subject/subject.component';
import { MulticastComponent } from './multicast/multicast.component';
import { BehaviorsubjectComponent } from './behaviorsubject/behaviorsubject.component';
import { ObservableComponent } from './observable/observable.component';
import { OfComponent } from './of/of.component';
import { RangeComponent } from './range/range.component';
import { OfFromComponent } from './of-from/of-from.component';
import { MapComponent } from './map/map.component';
import { PluckComponent } from './pluck/pluck.component';
import { MapToComponent } from './map-to/map-to.component';
import { FilterComponent } from './filter/filter.component';
import { TapComponent } from './tap/tap.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ReduceComponent } from './reduce/reduce.component';


@NgModule({
  declarations: [
    AppComponent,
    IntervalComponent,
    FromeventComponent,
    FiltermapComponent,
    ShareobsComponent,
    TakecontacComponent,
    BuffertimeComponent,
    ForkjoinComponent,
    ConcatmapComponent,
    SwitchmapComponent,
    ScanComponent,
    SubjectComponent,
    MulticastComponent,
    BehaviorsubjectComponent,
    ObservableComponent,
    OfComponent,
    RangeComponent,
    OfFromComponent,
    MapComponent,
    PluckComponent,
    MapToComponent,
    FilterComponent,
    TapComponent,
    ProgressBarComponent,
    ReduceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
