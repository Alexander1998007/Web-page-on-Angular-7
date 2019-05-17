export class TestData {
    // Загальне
    id: number;
    name: string;
    description: string;
    accentColor: string;
    accentColorSecondary: string;
    enable_multiple_lists: boolean;

    // Category
    positionNumber: number;
    items: any[];
    active: boolean;

    // Items
    position: number;
    title: string;
    long_description: string;
    gallery_images: any[];
    categories: any[];
    videoUrl: string;
    videoTitle: string;

    // gallery_images
    url: string;
    media_type: string;




}