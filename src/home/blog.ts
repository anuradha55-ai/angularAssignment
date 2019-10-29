import { comment } from './comment';

export interface blog {
    id: number;
    title: string;
    subtitle: string;
    imageSrc: string;
    description: string;
    likes: number;
    dislikes: number;
    comments: comment[];
}