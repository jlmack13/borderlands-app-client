// ** Action Creators **

export const updateLootFormData = lootFormData => {
    return {
        type: 'UPDATED_DATA',
        lootFormData
    }
}

export const resetLootForm = () => {
    return {
        type: 'RESET_LOOT_FORM'
    }
}