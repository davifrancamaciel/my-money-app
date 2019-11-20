export function selectTab(tabId) {
    return {
        type: 'TAB_SELECTED',
        payload: tabId
    }
}
// usando o parametro dessa forma "...tabIds" pode se passar o parametro da seguinte forma:
// tabLIst, tabCreate que vai ser criado um array [tabLIst, tabCreate] com os itens 
export function showTabs(...tabIds) {
    const tabsToShow = {}

    tabIds.forEach(e => tabsToShow[e] = true)
    return {
        type: 'TAB_SHOWED',
        payload: tabsToShow
    }
}