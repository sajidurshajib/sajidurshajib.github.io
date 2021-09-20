export const sidebarState = { hide: true }

export const sidebarReducer = (state, action) => {
    switch (action.type) {
        case 'expand':
            return { hide: false }
        case 'collapse':
            return { hide: true }
        case 'load':
            return { hide: action.payload }
        default:
            return state
    }
}
