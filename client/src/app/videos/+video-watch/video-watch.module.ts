import { NgModule } from '@angular/core'
import { TooltipModule } from 'ngx-bootstrap/tooltip'
import { ClipboardModule } from 'ngx-clipboard'
import { SharedModule } from '../../shared'
import { MarkdownService } from '../shared'
import { VideoCommentAddComponent } from './comment/video-comment-add.component'
import { VideoCommentComponent } from './comment/video-comment.component'
import { VideoCommentService } from './comment/video-comment.service'
import { VideoCommentsComponent } from './comment/video-comments.component'
import { VideoDownloadComponent } from './modal/video-download.component'
import { VideoReportComponent } from './modal/video-report.component'
import { VideoShareComponent } from './modal/video-share.component'

import { VideoWatchRoutingModule } from './video-watch-routing.module'

import { VideoWatchComponent } from './video-watch.component'

@NgModule({
  imports: [
    VideoWatchRoutingModule,
    SharedModule,
    ClipboardModule,
    TooltipModule.forRoot()
  ],

  declarations: [
    VideoWatchComponent,

    VideoDownloadComponent,
    VideoShareComponent,
    VideoReportComponent,
    VideoCommentsComponent,
    VideoCommentAddComponent,
    VideoCommentComponent
  ],

  exports: [
    VideoWatchComponent
  ],

  providers: [
    MarkdownService,
    VideoCommentService
  ]
})
export class VideoWatchModule { }
