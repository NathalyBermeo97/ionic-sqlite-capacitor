import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicetwoService } from 'src/app/services/servicetwo.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  product = null;
  constructor(private route: ActivatedRoute, private databaseService: ServicetwoService) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.product = await this.databaseService.getProductById(id);
  }

}
