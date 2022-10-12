export interface Cell {
    id: string;
    type: 'code' | 'cell';
    content: string;
}