import { ReviewAnswer } from './review-answer';
import { User } from './user';

export interface UserReview {
    id: number;
    productId: number;
    userId: number;
    rate: number;
    completeOn: Date;
    status: boolean;
    product?: any;
    user: User;
    reviewAnswers: ReviewAnswer[];
    userReviewMedia: any[];
}