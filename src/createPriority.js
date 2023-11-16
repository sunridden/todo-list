export default function createPriority(priority) {
    switch(priority) {
        case 'high':
            return 'priority-high';
        case 'medium':
            return 'priority-medium';
        default:
            return 'priority-low';
    }
}