//interface for artists
export interface Artist {
  id?: string
  name: string
  description?: string
  monthlyStreams: string
  popularity?: number
  images?: [{ url: string }, { url: string }, { url: string }]
  followers?: {
    total: string
  }
  genres?: string[]
}

//interface for songs
export interface song {
  name: string
  streams: number
  artistName?: string
  artistID?: string
  album?: {
    name: string;
    images: [{ url: string }, { url: string }, { url: string }]
  }
}
