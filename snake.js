document.addEventListener('DOMContentLoaded', () => {

    document.fonts.ready.then(() => {
        const canvas = document.getElementById('gameCanvas');
        const ctx = canvas.getContext('2d');

        const gridSize = 20;
        const tileCount = canvas.width / gridSize;

        let snake = [{ x: 10, y: 10 }];
        let food = {};
        let dx = 0;
        let dy = 0;
        let score = 0;
        let isGameOver = false;

        // Créer la nourriture à une position aléatoire
        function createFood() {
            food = {
                x: Math.floor(Math.random() * tileCount),
                y: Math.floor(Math.random() * tileCount)
            };
        }

        // Mettre à jour la position du serpent
        function update() {
            if (isGameOver) return;

            // Déplacer le serpent en ajoutant une nouvelle tête
            const head = { x: snake[0].x + dx, y: snake[0].y + dy };
            snake.unshift(head);

            // Gérer la collision avec la nourriture
            if (head.x === food.x && head.y === food.y) {
                score++;
                createFood();
            } else {
                snake.pop(); // Enlever la queue si pas de nourriture
            }

            // Gérer les collisions avec les murs
            if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
                isGameOver = true;
                return;
            }

            // Gérer les collisions avec le corps
            for (let i = 1; i < snake.length; i++) {
                if (head.x === snake[i].x && head.y === snake[i].y) {
                    isGameOver = true;
                    return;
                }
            }
        }

        // Dessiner le jeu sur le canvas
        function draw() {
            // Fond
            ctx.fillStyle = '#010e1aff';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Serpent
            ctx.fillStyle = '#ffffff';
            snake.forEach(segment => {
                ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize - 2, gridSize - 2);
            });

            // Nourriture
            ctx.fillStyle = '#ff4d4d';
            ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);

            // Afficher le score
            ctx.fillStyle = '#ffffff';
            // C'est ici que la police est définie. Elle sera maintenant chargée.
            ctx.font = '20px Fira Code'; 
            ctx.fillText(`Score: ${score}`, 10, 30);

            if (isGameOver) {
                ctx.fillStyle = '#ffffff';
                ctx.font = '30px Fira Code';
                ctx.textAlign = 'center';
                ctx.fillText('Game Over', canvas.width / 2, canvas.height / 2);
            }
        }

        // Boucle de jeu
        function gameLoop() {
            update();
            draw();
        }

        // Écouter les touches du clavier pour le mouvement
        document.addEventListener('keydown', e => {
            switch (e.key) {
                case 'ArrowUp':
                    if (dy === 0) { dx = 0; dy = -1; }
                    break;
                case 'ArrowDown':
                    if (dy === 0) { dx = 0; dy = 1; }
                    break;
                case 'ArrowLeft':
                    if (dx === 0) { dx = -1; dy = 0; }
                    break;
                case 'ArrowRight':
                    if (dx === 0) { dx = 1; dy = 0; }
                    break;
            }
        });

        // Initialisation
        createFood();
        setInterval(gameLoop, 100); // 100ms par frame pour la vitesse
    });
});