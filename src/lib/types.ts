interface IImage {
  alt: string
  original: {
    src: string
    metadata: {
      size: number
      width: number
      height: number
    }
  }
}

interface IAnimatedSvg {
  mobile: IImage
  desktop: IImage
}

interface ILinks {
  getPageMetadata: string
}

export interface ILobbyItem {
  id: string
  image: IImage
  activeImage: IImage | null
  name: string
  path: string
  isLiveCasino: boolean
  links: ILinks
  animatedSvg: IAnimatedSvg
}

export interface IImageDetails {
  id: string
  src: string
  alt: string
}

export interface IGameImage {
  alt: string
  original: IImageDetails
  small: IImageDetails
  thumbnail: IImageDetails
}

export interface IGameTile {
  type: string
  id: string
  platformId: string
  gameText: string
  provider: string
  provider_slug: string
  image: IGameImage
  slug: string
}
