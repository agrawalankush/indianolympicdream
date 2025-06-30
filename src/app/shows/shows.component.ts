import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SportsdataService } from '../sportsdata.service';
import { PageEvent } from '@angular/material/paginator';
import { CommonModule, NgIf, NgFor } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SafePipe } from '../safepipe';

interface VideoState {
  isPlaying: boolean;
  isLoading: boolean;
  thumbnailUrl: string;
}

@Component({
  selector: 'app-shows',
  standalone: true,
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss'],
  imports: [
    CommonModule,
    MatInputModule,
    MatPaginatorModule,
    MatCardModule,
    MatProgressSpinnerModule,
    SafePipe
  ]
})
export class ShowsComponent implements OnInit {
  public showsdata: any;
  public errmsg: string;
  public videoyoutube = 'https://www.youtube.com/embed/';
  public videoParams = '?autoplay=1&mute=0&enablejsapi=1&rel=0';
  public videoStates: { [key: string]: VideoState } = {};
  private edition: string;
  // MatPaginator Inputs
  length: number;
  pageSize = 100;
  pageSizeOptions: number[] = [15, 30, 50, 100];
  // MatPaginator Output
  pageEvent: PageEvent;

  constructor(
    private route: ActivatedRoute,
    private sportservice: SportsdataService
  ) { }

  ngOnInit() {
    this.loadShowsData();
  }

  loadShowsData() {
    this.sportservice.getshowsdata(0, this.pageSize)
      .subscribe(
        (res: any) => {
          this.showsdata = res.shows;
          this.length = res.total;
          this.showsdata.forEach((show: any) => {
            this.videoStates[show.youtube_id] = {
              isPlaying: false,
              isLoading: false,
              thumbnailUrl: `https://img.youtube.com/vi/${show.youtube_id}/hqdefault.jpg?ngsw-bypass=true`
            };
          });
        },
        (error: any) => {
          this.errmsg = error.error;
        });
  }

  playVideo(youtubeId: string) {
    if (!this.videoStates[youtubeId].isLoading) {
      this.videoStates[youtubeId].isLoading = true;
      this.videoStates[youtubeId].isPlaying = true;
    }
  }

  onVideoLoad(youtubeId: string) {
    this.videoStates[youtubeId].isLoading = false;
  }

  handlePageEvent(e: PageEvent) {
    const index = e.pageIndex * e.pageSize;
    const size = e.pageSize;
    this.sportservice.getshowsdata(index, size)
      .subscribe(
        (res: any) => {
          this.showsdata = res.shows;
          this.length = res.total;
        },
        (error) => {
          this.errmsg = error;
        });
  }

  handleImageError(youtubeId: string) {
    if (this.videoStates[youtubeId]) {
      console.log(`Image load error for YouTube ID: ${youtubeId}`);
    }
  }
}