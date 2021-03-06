import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { EducationComponent } from './component/education/education.component';
import { ResumeComponent } from './component/resume/resume.component';
import { SkillsComponent } from './component/skills/skills.component';
import { WorkComponent } from './component/work/work.component';
import { MainComponent } from './main/main.component';
const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', component: ResumeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'blog', component: SkillsComponent },
      { path: 'contact', component: WorkComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RootRoutingModule {}
