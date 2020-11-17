import { EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { ClickEvent } from '../../interfaces/click-event.interface';
import { HoverRatingChangeEvent } from '../../interfaces/hover-rating-change-event.interface';
import { RatingChangeEvent } from '../../interfaces/rating-change-event.interface';
import { StarRating } from '../../services/star-rating';
import { StarRatingConfigService } from '../../services/star-rating-config.service';
import * as ɵngcc0 from '@angular/core';
export declare class StarRatingControlComponent extends StarRating implements ControlValueAccessor {
    starClickChange: EventEmitter<ClickEvent>;
    ratingChange: EventEmitter<RatingChangeEvent>;
    hoverRatingChange: EventEmitter<HoverRatingChangeEvent>;
    onTouch: Function;
    onModelChange: Function;
    private onModelChangeRegistered;
    private onTouchRegistered;
    saveOnClick($event: ClickEvent): void;
    saveOnRatingChange($event: RatingChangeEvent): void;
    saveOnHover($event: HoverRatingChangeEvent): void;
    saveOnTouch(): void;
    saveOnModelChange(value: number): void;
    /**ACCESSIBILITY **/
    onKeyDown(event: KeyboardEvent): void;
    onBlur(event: FocusEvent): void;
    onFocus(event: FocusEvent): void;
    onStarHover(rating?: number): void;
    /**Form Control - ControlValueAccessor implementation**/
    writeValue(obj: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<StarRatingControlComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<StarRatingControlComponent, "star-rating-control", never, { "getHalfStarVisible": "getHalfStarVisible"; "getColor": "getColor"; "showHalfStars": "showHalfStars"; "hoverEnabled": "hoverEnabled"; "rating": "rating"; "step": "step"; "disabled": "disabled"; "readOnly": "readOnly"; "space": "space"; "starType": "starType"; "size": "size"; "speed": "speed"; "numOfStars": "numOfStars"; "direction": "direction"; "staticColor": "staticColor"; "labelPosition": "labelPosition"; "labelText": "labelText"; "id": "id"; }, { "starClickChange": "starClickChange"; "ratingChange": "ratingChange"; "hoverRatingChange": "hoverRatingChange"; }, never, never>;
}

//# sourceMappingURL=star-rating-control.component.d.ts.map