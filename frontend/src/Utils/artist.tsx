//interface for artists
export interface Artist{
    id?: string,
    name: string,
    description?: string;
    monthlyStreams: string,
    popularity?: number,
    img?: string,
}

//interface for songs
export interface song{
    name: string,
    artistName?: string,
    artistID?: string,
    streams: number,
}