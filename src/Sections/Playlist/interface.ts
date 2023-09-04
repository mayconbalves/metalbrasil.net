type Iframe = {
  width: string
  height: string
  src: string
  title: string
  allow: string
  videoTitle: string
}

export interface Props {
  playListContent: {
    content: {
      mainIframe: Iframe
      iframe: Iframe[]
    }
  }
}
