export interface LinkOverlay {
    id: number;
    name: string;
    position: 'top-left'|'top-right'|'bottom-left'|'bottom-right';
    message: string;
    label: string;
    btn_text: string;
    btn_link: string;
    user_id: number;
    colors: {[key: string]: string};
    created_at: string;
    updated_at: string;
}
