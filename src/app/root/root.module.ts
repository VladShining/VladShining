import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootRoutingModule } from './root-routing.module';
import { MainComponent } from './main/main.component';
import { TopComponent } from './component/top/top.component';
import { FootComponent } from './component/foot/foot.component';
import { ResumeComponent } from './component/resume/resume.component';
import { EducationComponent } from './component/education/education.component';
import { SkillsComponent } from './component/skills/skills.component';
import { WorkComponent } from './component/work/work.component';
import { ContactComponent } from './component/contact/contact.component';
import { AboutComponent } from './component/about/about.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    MainComponent,
    TopComponent,
    FootComponent,
    EducationComponent,
    ResumeComponent,
    SkillsComponent,
    WorkComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [CommonModule, RootRoutingModule, MatDialogModule]
})
export class RootModule {}
