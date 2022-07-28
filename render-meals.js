export function renderMeal(mealItem) {
    const div = document.createElement('div');
    div.classList.add('Meal');
    div.textContent = mealItem;

    return div;
}