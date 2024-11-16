// Получаем элементы
const searchInput = document.getElementById("searchInput");
const gameCards = document.querySelectorAll(".game-card");

// Функция фильтрации карточек
function filterGames() {
  const searchText = searchInput.value.toLowerCase().trim();

  if (!searchText) {
    // Показываем все карточки, если поле поиска пустое
    gameCards.forEach(card => card.style.display = 'block');
    return;
  }

  gameCards.forEach(card => {
    const title = card.getAttribute('data-title').toLowerCase();
    card.style.display = title.includes(searchText) ? 'block' : 'none';
  });
}

// Слушатель для нажатия Enter
searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    filterGames();
  }
});

// Слушатель для поиска (ввод и удаление текста)
searchInput.addEventListener("input", () => {
  if (searchInput.value.trim() === "") {
    // Если поле поиска очищено, показываем все карточки
    gameCards.forEach(card => card.style.display = "block");
  } else {
    filterGames();
  }
});

// Получаем элементы модального окна
const modal = document.getElementById("productModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalImage = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close-btn");

// Функция для открытия модального окна
function openModal(title, description, imageSrc) {
  modalTitle.textContent = title;
  modalDescription.textContent = description;
  modalImage.src = imageSrc;
  modal.style.display = "block";
}

// Закрытие модального окна
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Закрытие модального окна при клике вне его
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Добавляем обработчики клика на кнопки "Узнать больше"
document.querySelectorAll(".play-btn").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const card = event.target.closest(".game-card");
    const title = card.querySelector("h3").textContent;
    const description = card.querySelector("p").textContent;
    const imageSrc = card.querySelector("img").src;
    openModal(title, description, imageSrc);
  });
});

// Обновляем размеры изображения при открытии модального окна
function openModal(title, description, imageSrc) {
  modalTitle.textContent = title;
  modalDescription.textContent = description;
  modalImage.src = imageSrc;
  modalImage.width = 1920;
  modalImage.height = 1080;
  modal.style.display = "block";
}

// Список игр и их тегов
const gameTags = {
  "Grand Theft Auto V": ["открытый мир", "преступность", "экшен", "мультиплеер"],
  "Black Myth: Wukong": ["китайская мифология", "souls-like", "экшен-RPG", "фэнтези"],
  "Senua’s Saga: Hellblade II": ["психология", "темное фэнтези", "экшен", "нарратив"],
  "S.T.A.L.K.E.R. 2: Heart of Chornobyl": ["постапокалипсис", "выживание", "открытый мир", "хоррор"],
  "Genshin Impact": ["аниме", "открытый мир", "фэнтези", "RPG"],
  "Baldur’s Gate 3": ["D&D", "RPG", "фэнтези", "тактика"],
  "Cyberpunk 2077": ["киберпанк", "RPG", "открытый мир", "футуризм"],
  "Red Dead Redemption 2": ["дикий Запад", "открытый мир", "приключения", "реализм"],
  "Elden Ring": ["фэнтези", "открытый мир", "souls-like", "сложность"],
  "The Witcher 3: Wild Hunt": ["фэнтези", "RPG", "открытый мир", "выборы"],
  "Minecraft": ["креативность", "песочница", "строительство", "мультиплеер"],
  "The Elder Scrolls V: Skyrim": ["фэнтези", "открытый мир", "RPG", "драконы"],
  "God of War: Ragnarok": ["мифология", "экшен", "нордическая культура", "боги"],
  "Metro Exodus": ["постапокалипсис", "выживание", "шутер", "Россия"],
  "Mount & Blade 2: Bannerlord": ["средневековье", "тактика", "RPG", "симулятор"],
  "Atomic Heart": ["СССР", "шутер", "альт-история", "наука"],
  "Forza Horizon 5": ["гонки", "открытый мир", "автомобили", "реализм"],
  "Far Cry 6": ["экшен", "открытый мир", "революция", "шутер"],
  "Dragon Age: The Veilguard": ["фэнтези", "RPG", "магия", "выборы"],
  "Hogwarts Legacy": ["магия", "фэнтези", "открытый мир", "школа"],
  "Silent Hill 2": ["хоррор", "психология", "выживание", "мистика"],
  "Star Wars Jedi: Survivor": ["экшен", "космос", "фэнтези", "джедаи"],
  "Dying Light 2 Stay Human": ["выживание", "зомби", "паркур", "открытый мир"],
  "Hearts of Iron 4": ["стратегия", "Вторая мировая", "история", "симуляция"],
  "Dishonored 2": ["стелс", "экшен", "мистика", "выборы"],
  "Sea of Thieves": ["пираты", "кооператив", "приключения", "открытый мир"],
  "Ghost of Tsushima": ["самураи", "открытый мир", "историческое", "Япония"],
  "Doom Eternal": ["шутер", "демоны", "экшен", "хардкор"],
  "Metal Gear Solid V: The Phantom Pain": ["стелс", "шпионаж", "открытый мир", "тактика"],
  "Death Stranding": ["футуризм", "выживание", "доставка", "мистика"],
  "NieR: Automata": ["киберпанк", "философия", "экшен-RPG", "андроиды"],
  "Cuphead": ["платформер", "мультяшный стиль", "сложность", "кооператив"],
  "Watch Dogs: Legion": ["хакеры", "открытый мир", "технологии", "лондон"],
  "Rocket League": ["спорт", "аркада", "футбол", "автомобили"],
  "Rainbow Six Siege": ["тактика", "шутер", "командная игра", "спецназ"],
  "Devil May Cry 5": ["экшен", "демоны", "боевые искусства", "стиль"],
  "Black Desert Online": ["MMORPG", "фэнтези", "PvP", "корейская игра"],
  "Fallout 76": ["постапокалипсис", "выживание", "открытый мир", "мультиплеер"],
  "Borderlands 3": ["лутер-шутер", "кооператив", "юмор", "экшен"],
  "Mortal Kombat X": ["файтинг", "экшен", "фаталити", "боевые искусства"],
  "Valorant": ["шутер", "тактика", "командная игра", "герои"],
  "Middle-earth: Shadow of War": ["фэнтези", "орки", "экшен", "открытый мир"],
  "Hitman 3": ["стелс", "шпионаж", "миссии", "тактика"],
  "Assassin’s Creed Valhalla": ["викинги", "открытый мир", "историческое", "экшен"],
  "Resident Evil Village": ["хоррор", "выживание", "зомби", "мистика"],
  "Horizon Zero Dawn": ["открытый мир", "роботы", "приключения", "выживание"],
  "Persona 5": ["JRPG", "школьная жизнь", "аниме", "мистика"],
  "Control": ["мистика", "экшен", "наука", "сверхъестественное"],
  "Crysis 3 Remastered": ["шутер", "нанотехнологии", "экшен", "графика"],
  "The Outer Worlds": ["космос", "RPG", "черный юмор", "фэнтези"],
  "A Plague Tale: Innocence": ["выживание", "история", "крысы", "приключения"],
  "Little Nightmares II": ["хоррор", "платформер", "мистика", "приключения"]
};


// Функция для добавления тегов к карточке игры
document.querySelectorAll('.game-card').forEach(card => {
  const title = card.getAttribute('data-title');
  const tagsContainer = card.querySelector('.tags');
  
  if (gameTags[title]) {
    gameTags[title].forEach(tag => {
      const tagElement = document.createElement('span');
      tagElement.className = 'tag';
      tagElement.textContent = `#${tag}`;
      tagsContainer.appendChild(tagElement);
    });
  }
});