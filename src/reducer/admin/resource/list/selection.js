import { SET_RESOURCE_SELECTION } from '../../../../actions/bulkActions';

export default () => (previousState = [], { type, payload }) => {
    switch (type) {
        case SET_RESOURCE_SELECTION:
            return payload;
        default:
            return previousState;
    }
};
