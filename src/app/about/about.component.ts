import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { trigger, state, style, transition, animate, AnimationEvent } from '@angular/animations';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface QAPanel {
  question: string;
  description?: string;
  features?: string[];
  additionalInfo?: string; // New optional paragraph after features, before conclusion
  conclusion?: string;
  expanded: boolean;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: false,
  animations: [
    trigger('panelAnimation', [
      state('closed', style({
        height: '0',
        minHeight: '0',
        opacity: '0',
        overflow: 'hidden'
      })),
      state('open', style({
        height: '*',
        opacity: '1',
        overflow: 'hidden'
      })),
      transition('closed => open', [
        animate('600ms cubic-bezier(0.17, 0.67, 0.43, 0.99)')
      ]),
      transition('open => closed', [
        animate('600ms cubic-bezier(0.17, 0.67, 0.43, 0.99)')
      ])
    ]),
    trigger('contentAnimation', [
      state('visible', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      state('void', style({
        opacity: 0,
        transform: 'translateY(10px)'
      })),
      transition('void => visible', [
        animate('450ms 150ms ease-out')
      ])
    ])
  ]
})
export class AboutComponent implements OnInit {
  // QA panels data
  appPanels: QAPanel[] = [
    {
      question: 'Origin Story - (2018-2019)',
      description: 'This app was born in 2019 out of my frustration with Indian Mainstream Media and their ignorance towards Olympic sports. Qualifying for the Olympics is bloody hard, especially for us indians as we are not the most genetically gifted tribe. Our media always fails to provide proper context to Olympic Games. As Abhinav Bindra says "It\'s not every 4 years, it\'s everyday." Casual Indian sports fans and normal people who tune into to watch olympics don\'t get that you simply just don\'t get to play in the olympics; you need to navigate through complex qualification system to play in it! Our media\'s reporting on olympics has been absolutely shambolic!! It\'s been like, \"A tale told by an idiot, full of sound and fury, signifying nothing\". Our top journalists:',
      features: [
        '[Prabhu Chawla Calling Olypic Sports Tamasha](https://www.youtube.com/watch?v=SbcJ1zULANk)',
        '[Barkha Dutt getting goosebumps and tears!](https://x.com/BDUTT/status/1152880982959071232) on a year old video of Hima Das',
        '[Rajdeep Sardesai\'s proud indian moment](https://x.com/sardesairajdeep/status/1153002470496489473) on the very same video',
      ],
      additionalInfo: 'It was so infuriating to watch these clowns pretending to know their shit about Olympics in front of massive TV audiences when they dont\'t have any idea about it but then I also belived If you\'re not part of the solution,you\'re part of the problem. So, I had to try build something that tries to solve this problem, I just had to. So, in June 2019 I started IOD Twitter account and simultaneously started to work on building IOD. For 3 months I put in weekends and hours after work everyday and finally in September 2019 the indianolympicdream[dot]com was born.',
      conclusion: "I also hated the crap sports biopics that bollywood was making at that time (They are still at it) that\'s why I also added Shows I Love, Because I feel sports fans deserve better. In fact we deserse the best! so, find and go watch these increadile stories of passion, love, freedom, redemption, courage, and stories of hope.",
      expanded: false
    },
    {
      question: 'Running the IOD - (2019-2021)',
      description: '',
      features: [],
      additionalInfo: '',
      conclusion: "",
      expanded: false
    },
    {
      question: 'Killing of the IOD - (2022)',
      description: '',
      features: [],
      additionalInfo: '',
      conclusion: "",
      expanded: false
    },
    {
      question: 'Return of the king - (2025)',
      description: '',
      features: [],
      additionalInfo: '',
      conclusion: "",
      expanded: false
    }
    // {
    //   question: 'Who IOD is for?',
    //   description: 'IOD is a app that will help you follow India\'s Olympic journey throught the 4 years of an olympic cycle. It provides:',
    //   features: [
    //     'Real-time tracking of qualification statuses across all Olympic sports',
    //     'Detailed calendar of upcoming qualification events and past results',
    //     'Sport-specific qualification pathways and standards',
    //     'Daily schedule during major competitions',
    //     'Historical data of Indian performances at the Olympics',
    //     'Curated collection of quality sports content recommendations',
    //   ],
    //   additionalInfo: 'The platform brings together scattered information from various sources including international federations, national sports bodies, and Olympic committees into one accessible hub for Indian sports fans.',
    //   conclusion: "Whether you're a dedicated sports enthusiast or just beginning to follow Indian Olympic sports, IOD is built to keep you informed and engaged throughout the Olympic cycle.",
    //   expanded: false
    // }
  ];

  // Animation state tracking
  panelAnimating: { [key: string]: boolean } = {};

  constructor(private sanitizer: DomSanitizer, private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
    this.initializeAnimationStates();

    // Automatically expand first panel on init
    if (this.appPanels.length > 0) {
      this.appPanels[0].expanded = true;
    }
  }

  private initializeAnimationStates(): void {
    this.appPanels.forEach((_, index) => {
      this.panelAnimating[`panel-${index}`] = false;
    });
  }

  // Get animation state for panel expansion
  getPanelState(panel: QAPanel): string {
    return panel.expanded ? 'open' : 'closed';
  }

  // Get animation state for content
  getContentState(): string {
    return 'visible';
  }

  // Handle expand/collapse button click
  togglePanel(panel: QAPanel, index: number): void {
    const panelKey = `panel-${index}`;

    if (this.panelAnimating[panelKey]) return;

    this.panelAnimating[panelKey] = true;
    panel.expanded = !panel.expanded;
    this.changeDetector.detectChanges();
  }

  // Animation callback handler
  onAnimationDone(event: AnimationEvent, index: number): void {
    const panelKey = `panel-${index}`;
    this.panelAnimating[panelKey] = false;
  }

  // Parse links in feature list items - enhanced to support custom link text
  parseLinks(text: string): SafeHtml {
    // Updated regex to match [link text](url) format
    const markdownLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;

    // Replace markdown-style links with HTML links
    const result = text.replace(markdownLinkRegex, (match, linkText, url) => {
      return `<a href="${url}" target="_blank" rel="noopener">${linkText}</a>`;
    });

    // Also maintain backward compatibility with old format [url]
    const oldUrlRegex = /\[(https?:\/\/[^\]]+)\]/g;
    const finalResult = result.replace(oldUrlRegex, (match, url) => {
      return `<a href="${url}" target="_blank" rel="noopener">Link</a>`;
    });

    return this.sanitizer.bypassSecurityTrustHtml(finalResult);
  }
}
