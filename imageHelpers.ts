namespace images{
    /**
     * Checks whether an image (or tile) is in a list of images.
     * Images are compared by pixel content, not by reference.
     * @param img the image or tile to look for
     * @param list the images or tiles to search
     */
    //% blockId=image_is_in_list
    //% block="$img is in $list"
    //% img.shadow=screen_image_picker
    //% list.shadow=variables_get list.defl=list
    //% group="Compare"
    export function isInList(img: Image, list: Image[]): boolean {
        if (!img || !list) return false;
        for (const item of list) {
            if (item && img.equals(item)) return true;
        }
        return false;
    }

}