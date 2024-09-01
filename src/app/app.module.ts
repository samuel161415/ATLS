import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { PotentialPartnersComponent } from './pages/potential-partners/potential-partners.component';
import { EventInfoComponent } from './pages/event-info/event-info.component';
import { JudgesComponent } from './pages/judges/judges.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './shared/footer/footer.component';
import { TrackCardComponent } from './shared/track-card/track-card.component';
import { SafePipePipe } from './shared/safe-pipe.pipe';
import { AboutUsComponent } from './about-us/about-us.component';
import { LeadershipComponent } from './shared/leadership/leadership.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { WhyAttendComponent } from './pages/why-attend/why-attend.component';
import {CloudinaryModule} from '@cloudinary/ng';
import {ConsentComponent} from './privacy_consent/consent.component'
import { ConsentService } from './privacy_consent/consent.service';
import { TermsPluginLoaderService } from './privacy_consent/terms-plugin-loader.service';
import { InnovationComponent } from './pages/innovation/innovation.component';
import { LandingComponent } from './components/landing/landing.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ShareBtnComponent } from './components/share-btn/share-btn.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { GetTicketsComponent } from './pages/get-tickets/get-tickets.component';
import { HighlightNumbersPipe } from './highlight-numbers.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PotentialPartnersComponent,
    EventInfoComponent,
    JudgesComponent,
    FooterComponent,
    TrackCardComponent,
    SafePipePipe,
    AboutUsComponent,
    LeadershipComponent,
    ProjectsComponent,
    WhyAttendComponent,
    ConsentComponent,
    InnovationComponent,
    LandingComponent,
    TimelineComponent,
    HighlightNumbersPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CloudinaryModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    ShareBtnComponent,
    CarouselModule,
    GetTicketsComponent,
    
    
  ],
  providers: [
    ConsentService,
    TermsPluginLoaderService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
