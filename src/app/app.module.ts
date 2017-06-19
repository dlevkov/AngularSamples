import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexScreenComponent } from './main/container/flex-screen.component';
import { HeaderComponent } from './main/header/header.component';
import { ListComponent } from './list/list.component';
import {
  MdButtonModule,
  MdCardModule, MdMenuModule, MdToolbarModule,
  MdChipsModule, MdIconModule, MdInputModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemCardComponent } from './list/item-card.component';
import { HighlightDirective } from './directives/highlight.directive';
import { FooterComponent } from './main/footer/footer.component';
import { TrimPipe } from './pipes/trim.pipe';
import { BootstrapPanelComponent } from './main/header/bootstrap-panel.component';
import { AccordionComponent } from './list/accordion/accordion.component';
import { AccordionGroupComponent } from './list/accordion/accordion-group.component';
import { ZippyComponent } from './main/container/zippy/zippy.component';
import { ContactFormComponent } from './main/forms/contact-form/contact-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FlexScreenComponent,
    ListComponent,
    ItemCardComponent,
    HighlightDirective,
    FooterComponent,
    TrimPipe,
    BootstrapPanelComponent,
    AccordionComponent,
    AccordionGroupComponent,
    ZippyComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdCardModule, MdButtonModule, MdMenuModule, MdToolbarModule, MdChipsModule, MdIconModule, MdInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
