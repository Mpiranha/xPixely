import {SelectOptionLists} from '@common/core/services/value-lists.service';
import {LinkOverlay} from '../link-overlay/link-overlay';

export const LINK_PAGE_TYPE = 'link_page';

export interface LinkOptionsList extends SelectOptionLists {
    overlays?: LinkOverlay[];
}
