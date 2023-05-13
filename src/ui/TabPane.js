export function installTabPanes() {
    const tabPane = document.querySelector('.tab-pane');
    const tabButtons = tabPane.querySelectorAll('.tab button');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabItem = button.parentNode;
            const tabItemId = tabItem.dataset.tab;
            const contentItem = document.querySelector(`.tab-content[data-tab="${tabItemId}"]`);

            // Remove the active class from all content items
            const contentItems = document.querySelectorAll('.tab-content');
            contentItems.forEach(item => {
                item.classList.remove('active');
                item.style.display = "none"
            });
            const tabItems = document.querySelectorAll('.tab')
            tabItems.forEach(tab => {
                tab.classList.remove('selected-tab')
            })
            // Add the active class to the corresponding content item
            tabItem.classList.add('selected-tab');
            contentItem.classList.add('active');
            contentItem.style.display = ""
        });
    });
}