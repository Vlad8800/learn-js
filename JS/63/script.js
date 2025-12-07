
        // Годинник
        function updateClock() {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
        }
        setInterval(updateClock, 1000);
        updateClock();

        // To-Do List
        let todos = [];
        let shopItems = [];

        // Завантаження даних
        function loadData() {
            const savedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
            const savedShop = JSON.parse(localStorage.getItem('shopItems') || '[]');
            todos = savedTodos;
            shopItems = savedShop;
            renderTodos();
            renderShopItems();
        }

        function saveData() {
            localStorage.setItem('todos', JSON.stringify(todos));
            localStorage.setItem('shopItems', JSON.stringify(shopItems));
        }

        function addTodo() {
            const input = document.getElementById('todo-input');
            const text = input.value.trim();
            if (text) {
                todos.push({ id: Date.now(), text, completed: false });
                input.value = '';
                saveData();
                renderTodos();
            }
        }

        function toggleTodo(id) {
            const todo = todos.find(t => t.id === id);
            if (todo) {
                todo.completed = !todo.completed;
                saveData();
                renderTodos();
            }
        }

        function deleteTodo(id) {
            todos = todos.filter(t => t.id !== id);
            saveData();
            renderTodos();
        }

        function renderTodos() {
            const list = document.getElementById('todo-list');
            const completed = todos.filter(t => t.completed).length;
            const total = todos.length;
            
            list.innerHTML = todos.map(todo => `
                <div class="task-item ${todo.completed ? 'completed' : ''}">
                    <input type="checkbox" class="checkbox" 
                           ${todo.completed ? 'checked' : ''} 
                           onchange="toggleTodo(${todo.id})">
                    <span class="task-text">${todo.text}</span>
                    <button class="delete-btn" onclick="deleteTodo(${todo.id})">✕</button>
                </div>
            `).join('');
            
            document.getElementById('todo-count').textContent = `Виконано: ${completed} з ${total}`;
        }

        // Shopping List
        function addShopItem() {
            const input = document.getElementById('shop-input');
            const text = input.value.trim();
            if (text) {
                shopItems.push({ id: Date.now(), text, bought: false });
                input.value = '';
                saveData();
                renderShopItems();
            }
        }

        function toggleShopItem(id) {
            const item = shopItems.find(s => s.id === id);
            if (item) {
                item.bought = !item.bought;
                saveData();
                renderShopItems();
            }
        }

        function deleteShopItem(id) {
            shopItems = shopItems.filter(s => s.id !== id);
            saveData();
            renderShopItems();
        }

        function renderShopItems() {
            const list = document.getElementById('shop-list');
            const bought = shopItems.filter(s => s.bought).length;
            const total = shopItems.length;
            
            list.innerHTML = shopItems.map(item => `
                <div class="shop-item ${item.bought ? 'completed' : ''}">
                    <input type="checkbox" class="checkbox" 
                           ${item.bought ? 'checked' : ''} 
                           onchange="toggleShopItem(${item.id})">
                    <span class="shop-text">${item.text}</span>
                    <button class="delete-btn" onclick="deleteShopItem(${item.id})">✕</button>
                </div>
            `).join('');
            
            document.getElementById('shop-count').textContent = `Куплено: ${bought} з ${total}`;
        }

        // Enter для додавання
        document.getElementById('todo-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') addTodo();
        });

        document.getElementById('shop-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') addShopItem();
        });

        // Ініціалізація
        loadData();
