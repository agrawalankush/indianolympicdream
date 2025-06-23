import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SportsdataService } from '../sportsdata.service';
import { PageEvent } from '@angular/material/paginator';

interface VideoState {
  isPlaying: boolean;
  isLoading: boolean;
  thumbnailUrl: string;
}

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss'],
  standalone: false
})
export class ShowsComponent implements OnInit {
  public showsdata: any;
  public errmsg: string;
  public videoyoutube = 'https://www.youtube.com/embed/';
  public videoParams = '?autoplay=1&mute=0&enablejsapi=1&rel=0';
  public videoStates: { [key: string]: VideoState } = {};
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
    this.sportservice.getshowsdata(0, this.pageSize)
      .subscribe(
        (res: any) => {
          this.showsdata = res.shows;
          this.length = res.total;
          this.showsdata.forEach((show: any) => {
            this.videoStates[show.youtube_id] = {
              isPlaying: false,
              isLoading: false,  // Initialize loading state
              thumbnailUrl: `https://img.youtube.com/vi/${show.youtube_id}/hqdefault.jpg?ngsw-bypass=true`
            };
          });
        },
        (error: any) => {
          this.errmsg = error.error;
        });
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.addEventListener('message', event => {
        console.log('SW Message:', event.data);
      });
    }
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
