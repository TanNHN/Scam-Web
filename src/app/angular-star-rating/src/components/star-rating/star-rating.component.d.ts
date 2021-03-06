import { EventEmitter } from '@angular/core';
import { ClickEvent } from '../../interfaces/click-event.interface';
import { HoverRatingChangeEvent } from '../../interfaces/hover-rating-change-event.interface';
import { RatingChangeEvent } from '../../interfaces/rating-change-event.interface';
import { StarRating } from '../../services/star-rating';
import { StarRatingConfigService } from '../../services/star-rating-config.service';
import * as ɵngcc0 from '@angular/core';
export declare class StarRatingComponent extends StarRating {
    starClickChange: EventEmitter<ClickEvent>;
    ratingChange: EventEmitter<RatingChangeEvent>;
    hoverRatingChange: EventEmitter<HoverRatingChangeEvent>;
    saveOnClick($event: ClickEvent): void;
    saveOnRatingChange($event: RatingChangeEvent): void;
    saveOnHover($event: HoverRatingChangeEvent): void;
    /**ACCESSIBILITY **/
    onKeyDown(event: KeyboardEvent): void;
    onStarHover(rating?: number): void;
    constructor(config: StarRatingConfigService);
    setRating(value: number): void;
    /**
     * onStarClicked
     *
     * Is fired when a star is clicked. And updated the rating value.
     * This function returns if the disabled or readOnly
     * property is set. If provided it emits the onClick event
     * handler with the actual rating value.
     *
     * @param rating
     */
    onStarClicked(rating: number): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<StarRatingComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<StarRatingComponent, "star-rating", never, { "getHalfStarVisible": "getHalfStarVisible"; "getColor": "getColor"; "showHalfStars": "showHalfStars"; "hoverEnabled": "hoverEnabled"; "rating": "rating"; "step": "step"; "disabled": "disabled"; "readOnly": "readOnly"; "space": "space"; "starType": "starType"; "size": "size"; "speed": "speed"; "numOfStars": "numOfStars"; "direction": "direction"; "staticColor": "staticColor"; "labelPosition": "labelPosition"; "labelText": "labelText"; "id": "id"; }, { "starClickChange": "starClickChange"; "ratingChange": "ratingChange"; "hoverRatingChange": "hoverRatingChange"; }, never, never>;
}

//# sourceMappingURL=star-rating.component.d.ts.map