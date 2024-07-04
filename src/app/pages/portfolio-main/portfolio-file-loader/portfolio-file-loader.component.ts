import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ContainerCardComponent } from "../../../shared/components/container-card/container-card.component";
import { DataService } from "../../../shared/services/data.service";

@Component({
  selector: "app-portfolio-file-loader",
  standalone: true,
  imports: [ContainerCardComponent],
  templateUrl: "./portfolio-file-loader.component.html",
  styleUrl: "./portfolio-file-loader.component.css",
})
export class PortfolioFileLoaderComponent {
  fileInputText = "Open Portfolio Holdings Data*:";
  footerText = "*Supported file formats: .csv";

  constructor(
    private dataService: DataService,
    private router: Router,
  ) {
    if (this.dataService.portfolioSymbols.length > 0 &&
      Object.keys(this.dataService.portfolioData).length === this.dataService.portfolioSymbols.length
    ) {
      this.router.navigateByUrl("/main");
    }
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
