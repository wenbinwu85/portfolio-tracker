import { MatIconModule } from "@angular/material/icon";
import { ChangeDetectionStrategy, Component, signal } from "@angular/core";
import { Router } from "@angular/router";
import { ContainerCardComponent } from "../../../shared/components/container-card/container-card.component";
import { DataService } from "../../../shared/services/data.service";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { PortfolioEditorComponent } from "../../../shared/components/portfolio/portfolio-editor/portfolio-editor.component";

@Component({
  selector: "app-homepage-landing",
  standalone: true,
  imports: [
    MatIconModule,
    ContainerCardComponent,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    PortfolioEditorComponent,
  ],
  templateUrl: "./homepage-landing.component.html",
  styleUrl: "./homepage-landing.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomepageLandingComponent {
  step = signal(0);

  constructor(private dataService: DataService, private router: Router) {
    if (!!this.dataService.sanityCheck()) {
      this.router.navigateByUrl("/main");
    }
  }

  setStep(index: number) {
    this.step.set(index);
  }

  nextStep() {
    this.step.update(i => i + 1);
  }

  prevStep() {
    this.step.update(i => i - 1);
  }

  handleOpenFile(event: any) {
    const selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const fileContent = (reader.result as string).split("\n");
      this.dataService.generatePortfolioData(fileContent);
    };
    reader.readAsText(selectedFile);
  }
}
