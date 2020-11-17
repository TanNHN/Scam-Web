import { Question } from './question';

export interface ReviewAnswer {
    id: number;
    userReviewId: number;
    questionId: number;
    answer: string;
    status: boolean;
    question: Question;
}