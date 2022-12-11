export interface IPost {
    _id: string
    title?: string
    comments: string[]
    likes: string[]
    tags: string[]
    image?: string | null
    author?: string
    isPublished?: boolean | null
    createdAt?: string | null
    updatedAt?: string | null
  }