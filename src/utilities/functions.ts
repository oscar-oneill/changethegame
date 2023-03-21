import {image} from './images'

export const setReaction = (score: number) => {
    switch (true) {
        case score === 100: return image.perfect;
        case score >= 80: return image.good;
        case score >= 60: return image.alright;
        case score >= 40: return image.yikes;
        case score >= 20: return image.bad;
        case score >= 0: return image.trash;
    }    
}