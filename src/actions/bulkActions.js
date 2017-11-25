/**
 * Action creators related with bulk resource management
 */

export const SET_RESOURCE_SELECTION = 'AOR/SET_RESOURCE_SELECTION';

/**
 * Set resource selection
 */
export const setResourceSelection = (listIds, resource, selected) => {
    let payload;
    if (selected === 'all') {
        payload = listIds;
    } else if (selected === 'none') {
        payload = [];
    } else {
        payload = listIds.reduce((acc, id, i) => {
            if (selected.includes(i)) {
                acc.push(id);
            }
            return acc;
        }, []);
    }
    return {
        payload,
        type: SET_RESOURCE_SELECTION,
        meta: { resource },
    };
};
