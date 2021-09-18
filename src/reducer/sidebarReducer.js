export const sidebarState = { hide: false }

export const sidebarReducer = (state, action) => {
    switch (action.type) {
        case 'expand':
            return { hide: false }
        case 'collapse':
            return { hide: true }
        default:
            return state
    }
}
